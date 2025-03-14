import { z } from "zod";

export const schemaForm = z
  .object({
    address: z.object({
      zipCode: z.string().min(9, "Por favor informe um CEP válido"),
      street: z.string().min(1, "Por favor informe uma rua válida"),
      number: z.string().min(1, "Por favor informe um número válido"),
      city: z.string().min(1, "Por favor informe uma cidade válida"),
      state: z.string().min(1, "Por favor informe um estado válido"),
      complement: z.string().optional(),
      district: z.string().min(1, "Por favor informe um bairro válido"),
    }),
  })
  .transform((field) => ({
    address: {
      zipCode: field.address.zipCode,
      street: field.address.street,
      number: field.address.number,
      city: field.address.city,
      state: field.address.state,
      complement: "",
      district: field.address.district,
    },
  }));