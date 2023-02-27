import { useForm } from "react-hook-form";

export default function App() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div background="#F9D423">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                <label for="exampleInputEmail1">Fecha de Plantacion</label>
                <input type='date' {...register("firstName")} /><br></br>
                <label for="exampleInputEmail1">Fecha de Recoleccion</label>
                <input type='date' {...register("firstName")} /><br></br>
                <input type='image' />
                <input type="submit" />
                </div>
            </form>
        </div>
    );
}