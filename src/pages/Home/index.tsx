import img from "../../assets/imagem.jpg"

export const Home = () => {
    return (
        <div className="flex align-middle content-center bg-violet-900 p-4 shadow-xl flex-row justify-between " >
            <div className="w-96 h-96 flex flex-col justify-center content-center align-middle  ">
            <div className=" text-4xl text-white  ">
               Veja o Guia definitivo para conquistar seus objetivos como dev em 2022
            </div>
            <div className=" w-auto text-2xl text-white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend massa velit, eu pharetra nisl semper in. Fusce congue metus pharetra, porta tortor eget, vehicula massa. Curabitur tincidunt nisi eget est cursus porttitor.
            </div>
            </div>
            <div>
             <img src={img} className="rounded-lg "/>
            </div>
        </div>  
    )
} 
