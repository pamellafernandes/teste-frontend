import { useForm } from "react-hook-form";
import { AddressProps, FormProps } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaForm } from "./schema";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { zipCodeMask } from "@/constants/masks";

export const useCep = () => {
    const {
        handleSubmit,
        register,
        watch,
        setValue,
        reset,
        clearErrors,
        formState: { errors },
      } = useForm<FormProps>({
        criteriaMode: "all",
        mode: "all",
        resolver: zodResolver(schemaForm),
        defaultValues: {
          address: {
            city: "",
            complement: "",
            district: "",
            number: "",
            state: "",
            street: "",
            zipCode: "",
          },
        },
      });
    
    
      const [loading, setLoading] = useState(false);
      const [cepError, setCepError] = useState<string | null>(null);
      const zipCode = watch("address.zipCode");
    
      const handleFormSubmit = async (data: FormProps) => {

        console.log("Dados enviados: ",data);
        try {
          const response = await axios.post("/api/saveAddress/", {
            ...data.address,
            complement: data.address.complement || "", 
          });
          console.log("Dados Salvos", response.data.message);
        } catch (error) {
          console.error("Erro ao salvar dados:", error);
        }
      };
    
      const handleSetData = useCallback(
        (data: AddressProps) => {

      
          setValue("address.city", data.localidade);
          setValue("address.street", data.logradouro);
          setValue("address.state", data.uf);
          setValue("address.district", data.bairro);
          setValue("address.complement", "");
      
          clearErrors(["address.city", "address.street", "address.state", "address.district"]);
        },
        [setValue, clearErrors]
      );
    
    const handleFetchAddress = useCallback(
        async (zipCode: string) => {
          setLoading(true);
          setCepError(null); 
      
          try {
            const { data } = await axios.get(
              `https://viacep.com.br/ws/${zipCode}/json/`
            );
      
            if (data.erro) {
              setCepError("Endereço não encontrado");
              setValue("address.city", "");
              setValue("address.street", "");
              setValue("address.state", "");
              setValue("address.district", "");
              setValue("address.complement", "");
              clearErrors("address.zipCode");
            } else {
              handleSetData(data);
            }
          } catch (error) {
            console.error("Erro ao buscar endereço", error);
            setCepError("Erro ao buscar endereço");
          } finally {
            setLoading(false);
          }
        },
        [handleSetData, setValue, clearErrors]
      );

    
      useEffect(() => {
        setValue("address.zipCode", zipCodeMask(zipCode));
        if (zipCode.length !== 9){
            setCepError(null);
            return;
        } 
        handleFetchAddress(zipCode);
      }, [handleFetchAddress, zipCode, setValue]);

      const handleClear = () => {
        reset();
      }

    
    return {
        errors,
        register,
        handleFormSubmit,
        handleSubmit,
        handleClear,
        loading, 
        cepError,
    };
}