import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-32 mt-32 p-6">
      <section className="flex md:flex-row flex-col justify-center items-center gap-10">
        <Image src="/bg-gradient.png" alt="" width={200} height={200} />
        <div className="flex flex-col gap-6">
          <div className="relative flex md:justify-start justify-center">
            <Image src="/arrow.png" alt="" width={100} height={100} className="absolute md:block hidden -translate-x-32 -translate-y-10" />
            <p className="md:-translate-x-6 md:-translate-y-6 text-xl font-black">Olá, meu nome é <span className="text-[#7127BA]">Jhonathan</span></p>
          </div>
          <p className="flex flex-col gap-2">
            <span className="text-lg md:text-left text-center">Um desenvolvedor que</span>
            <span className="text-4xl md:text-left text-center">Julga um livro</span>
            <span className="text-4xl md:text-left text-center">
              Pela&nbsp;
              <span className="relative text-[#7127BA]">
                capa
                <span className="absolute -left-2 h-12 w-24 bg-transparent border-2 rounded-full transform -rotate-12"></span>
              </span>
              &nbsp;...
            </span>
            <span className="text-lg lg:text-left text-center mt-2">Porque se a capa não te impressiona, <br className="md:hidden block" /> o que mais pode?</span>
          </p>
        </div>
      </section>
      <section className="relative flex flex-col items-center lg:px-60">
        <hr className="w-[150px] mx-auto mb-10 border-t-4 rounded-full" />
        <h1 className="text-4xl mb-6">Um pouco sobre mim</h1>
        <p className="text-lg text-justify">
          Sou estudante de Análise e Desenvolvimento de Sistemas e atuo como desenvolvedor freelance, especializado em criar sites e soluções web.
          Utilizo tecnologias como HTML, CSS, JavaScript, TypeScript, React.js e Next.js, além de trabalhar com WordPress para entregar projetos otimizados e funcionais.
        </p>
        <hr className="w-[150px] mx-auto mt-10 border-t-4 rounded-full" />
        <div className="absolute -z-10 w-full h-full opacity-50">
          {/* <Image src="/bg-gradient.png" alt="" fill className="" /> */}
        </div>
      </section>
      <section className="relative flex flex-col gap-10 w-full">
        <h1 className="text-4xl lg:text-left text-center xl:mx-60 lg:mx-32">Meu portfólio</h1>
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 lg:w-1/2 w-full lg:h-screen h-[200vh] ">
          <Image src="/bg-gradient.png" alt="" fill className="" />
        </div>
      </section>
      <section>

      </section>
    </main>
  );
}
