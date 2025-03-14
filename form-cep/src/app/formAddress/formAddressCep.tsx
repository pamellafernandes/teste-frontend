"use client";
import { useCep } from "./useCep";

export default function FormAddressCep() {
  const {
    errors,
    handleSubmit,
    handleFormSubmit,
    register,
    handleClear,
    loading,
    cepError,
  } = useCep();

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-gray-600 shadow-lg rounded-lg">
      <h2 data-testid="cypress-title" className="text-2xl font-bold mb-4 text-center justify-center">
        Formulário de Endereço
      </h2>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white">CEP</label>
          <input
            data-testid="cep-input"
            type="text"
            {...register("address.zipCode")}
            className="w-full border p-2 rounded-lg bg-gray-200 text-gray-600 outline-none"
            placeholder="Digite seu CEP"
            maxLength={9}
          />
          {errors.address?.zipCode?.message && !cepError && (
            <span className="text-red-500">{errors.address?.zipCode.message}</span>
          )}
          {cepError && <span className="text-red-500">{cepError}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Logradouro</label>
          <input
            data-testid="street-input"
            type="text"
            {...register("address.street")}
            className="w-full border p-2 rounded-lg bg-gray-200 text-gray-600 outline-none"
            placeholder="Rua, Avenida..."
          />
          {errors.address?.street?.message && (
            <span className="text-red-500">{errors.address?.street.message}</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Complemento</label>
          <input
            data-testid="complement-input"
            {...register("address.complement")}
            type="text"
            className="w-full border p-2 rounded-lg bg-gray-200 text-gray-600 outline-none"
            placeholder="Apartamento, bloco..."
          />
          {errors.address?.complement?.message && (
            <span className="text-red-500">{errors.address?.complement.message}</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Número</label>
          <input
            data-testid="number-input"
            type="text"
            {...register("address.number")}
            className="w-full border p-2 rounded-lg bg-gray-200 text-gray-600 outline-none"
            placeholder="Insira o número de sua residência"
          />
          {errors.address?.number?.message && (
            <span className="text-red-500">{errors.address?.number.message}</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Bairro</label>
          <input
            data-testid="district-input"
            type="text"
            {...register("address.district")}
            className="w-full border p-2 rounded-lg bg-gray-200 text-gray-600 outline-none"
            placeholder="Bairro"
          />
          {errors.address?.district?.message && (
            <span className="text-red-500">{errors.address?.district.message}</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Cidade</label>
          <input
            data-testid="city-input"
            type="text"
            {...register("address.city")}
            className="w-full border p-2 rounded-lg bg-gray-200 text-gray-600 outline-none"
            placeholder="Cidade"
          />
          {errors.address?.city?.message && (
            <span className="text-red-500">{errors.address?.city.message}</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Estado</label>
          <input
            data-testid="state-input"
            type="text"
            {...register("address.state")}
            className="w-full border p-2 rounded-lg bg-gray-200 text-gray-600 outline-none"
            placeholder="Estado (UF)"
          />
          {errors.address?.state?.message && (
            <span className="text-red-500">{errors.address?.state.message}</span>
          )}
        </div>
        <div className="flex items-center pt-5">
          <button
            data-testid="clear-button"
            type="button"
            className="w-full bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 outline-none"
            onClick={handleClear}
          >
            Limpar
          </button>
        </div>
        <div className="flex items-center">
          <button
            data-testid="submit-button"
            type="submit"
            className="w-full text-white bg-green-700 hover:bg-green-800 font-bold rounded-lg text-sm px-5 py-2.5 transition"
            disabled={loading}
          >
            {loading ? "Carregando..." : "Salvar"}
          </button>
        </div>
      </form>
    </div>
  );
}
