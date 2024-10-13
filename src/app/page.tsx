import AnimatedBeamDemo from "@/components/AnimatedBeamDemo";
import Image from "next/image";




export default function Home() {
  return (
    <main className="flex flex-col items-center gap-32 p-6">
      <section className="flex md:flex-row flex-col justify-center items-center gap-10">
        <div className="relative h-60 w-60">
          <div className="absolute h-96 w-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src="/bg-gradient.png" alt="" fill className="absolute" />
          </div>
          <Image src="/user.png" alt="" width={120} height={120} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-90" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="relative flex md:justify-start justify-center">
            <Image src="/arrow.png" alt="" width={100} height={100} className="absolute md:block hidden -translate-x-32 -translate-y-10" />
            <p className="md:-translate-x-6 md:-translate-y-6 text-xl font-black">Olá, meu nome é <span className="text-[#7127BA]">Jhonathan!</span></p>
          </div>
          <p className="flex flex-col gap-2 z-10">
            <span className="text-lg md:text-left text-center">Um desenvolvedor que</span>
            <span className="text-4xl md:text-left text-center">Julga um livro</span>
            <span className="text-4xl md:text-left text-center">
              Pela&nbsp;
              <span className="relative text-[#7127BA] z-50">
                capa
                <span className="absolute -left-2 h-12 w-24 bg-transparent border-2 rounded-full transform -z-10 -rotate-12"></span>
              </span>
              &nbsp;...
            </span>
            <span className="text-lg lg:text-left text-center mt-2">Porque se a capa não te impressiona, <br className="md:hidden block" /> o que mais pode?</span>
          </p>
        </div>
      </section>
      <section className="relative flex flex-col items-center lg:px-52 md:px-28">
        <hr className="w-[150px] mx-auto mb-10 border-t-4 rounded-full" />
        <h1 className="text-4xl mb-6 text-center">Um pouco sobre <span className="text-[#7127BA]">mim</span></h1>
        <p className="text-xl text-justify">
          Sou estudante de Análise e Desenvolvimento de Sistemas e atuo como desenvolvedor freelance, criando sites e soluções web.
          Utilizo tecnologias como HTML, CSS, JavaScript, TypeScript, React.js, Next.js e Python, além de trabalhar com WordPress para entregar projetos otimizados e funcionais.
        </p>
        <hr className="w-[150px] mx-auto mt-10 border-t-4 rounded-full" />
        <div className="absolute -z-10 w-full h-full opacity-50">
          {/* <Image src="/bg-gradient.png" alt="" fill className="" /> */}
        </div>
      </section>
      <section id="work-experience" className="relative flex flex-col gap-10 w-full">
        <h1 className="text-4xl lg:text-left text-center xl:mx-60 lg:mx-32">Experiências de trabalho</h1>
        <div className="flex lg:flex-row flex-col lg:justify-center items-center gap-10 xl:px-60 lg:px-32">
          <div className="flex items-end w-2/3 h-40 bg-gradient-to-r from-[#271343] to-[#4F228D] rounded-xl">
            <div className="bg-gradient-to-r from-[#130428] to-[#26094e] w-full h-[98%] rounded-xl">
            </div>
          </div>
          <div className="flex items-end w-2/3 h-40 lg:bg-gradient-to-l bg-gradient-to-r from-[#271343] to-[#4F228D] rounded-xl">
            <div className="lg:bg-gradient-to-l bg-gradient-to-r from-[#130428] to-[#26094e] w-full h-[98%] rounded-xl">
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-center items-center gap-10 xl:px-60 lg:px-32">
          <div className="flex items-end w-2/3 h-40 bg-gradient-to-r from-[#271343] to-[#4F228D] rounded-xl">
            <div className="bg-gradient-to-r from-[#130428] to-[#26094e] w-full h-[98%] rounded-xl">
            </div>
          </div>
          <div className="flex items-end w-2/3 h-40 lg:bg-gradient-to-l bg-gradient-to-r from-[#271343] to-[#4F228D] rounded-xl">
            <div className="lg:bg-gradient-to-l bg-gradient-to-r from-[#130428] to-[#26094e] w-full h-[98%] rounded-xl">
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 lg:w-1/2 w-full lg:h-screen h-[200vh] opacity-80">
          <Image src="/bg-gradient.png" alt="" fill className="" />
        </div>
      </section>
      <section className="lg:px-52 md:px-28">
        <hr className="w-[150px] mx-auto mb-10 border-t-4 rounded-full" />
        <h1 className="text-xl text-justify mb-10">Atualmente estou procurando
          <span className="text-[#7127BA]">
            &nbsp;ingressar&nbsp;
          </span>
          em uma empresa onde eu possa colaborar em projetos desafiadores, compartilhar meus conhecimentos e continuar aprimorando minhas habilidades em desenvolvimento web, contribuindo para o
          <span className="text-[#7127BA]">
            &nbsp;sucesso&nbsp;
          </span>
          e crescimento da empresa.
        </h1>
        <hr className="w-[150px] mx-auto mt-10 border-t-4 rounded-full" />
      </section>
      <section id="hard-skills" className="flex justify-center w-full">
        <AnimatedBeamDemo />
      </section>
      <section>

      </section>
    </main>
  );
}
