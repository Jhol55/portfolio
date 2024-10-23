import HardSkills from "@/components/HardSkills";
import { WorkExperienceCard } from "@/components/WorkExperienceCard";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col items-center gap-32 p-6">
      <section className="flex md:flex-row flex-col justify-center items-center gap-10">
        <div className="relative h-60 w-60">
          <div className="absolute h-96 w-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src="/bg-gradient.png" alt="" fill priority className="absolute" />
          </div>
          <Image src="/user.png" alt="" width={120} height={120} priority className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-90" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="relative flex md:justify-start justify-center">
            <Image src="/arrow.png" alt="Arrow" width={100} height={100} priority className="absolute md:block hidden -translate-x-32 -translate-y-10" />
            <p className="md:-translate-x-6 md:-translate-y-6 text-xl font-black">Olá, meu nome é <span className="text-[#874CDE]">Jhonathan!</span></p>
          </div>
          <p className="flex flex-col gap-2 z-10">
            <span className="text-lg md:text-left text-center">Um desenvolvedor que</span>
            <span className="text-4xl md:text-left text-center">Julga um livro</span>
            <span className="text-4xl md:text-left text-center">
              Pela&nbsp;
              <span className="relative text-[#874CDE] z-50">
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
        <h1 className="text-4xl mb-6 text-center">Um pouco sobre <span className="text-[#874CDE]">mim</span></h1>
        <p className="text-xl text-justify">
          Sou estudante de Análise e Desenvolvimento de Sistemas e atuo como desenvolvedor freelance, criando sites e soluções web.
          Utilizo tecnologias como HTML, CSS, JavaScript, TypeScript, React.js, Next.js e Python, além de trabalhar com WordPress para entregar projetos otimizados e funcionais.
        </p>
        <hr className="w-[150px] mx-auto mt-12 border-t-4 rounded-full" />
        <div className="absolute -z-10 w-full h-full opacity-50">
          {/* <Image src="/bg-gradient.png" alt="" fill className="" /> */}
        </div>
      </section>
      <section id="work-experience" className="relative flex flex-col gap-10 w-full">
        <h1 className="text-4xl lg:text-left text-center xl:mx-60 lg:mx-32">Experiência profissional</h1>
        <div className="flex xl:flex-row flex-col lg:justify-center items-center gap-10 xl:px-60 md:px-32">
          <WorkExperienceCard
            gradientDirection="right"
            title="Agência Kreivo"
            description="Desenvolvedor Front-end Freelance"
            observation="08/2024 - Atual"
            src="/logo.png"
            ctaText="Ver mais"
            ctaLink=""
            content={
              <p>
                Atuo como desenvolvedor freelance, criando sites e soluçôes web para diversos clientes, aplicando meus conhecimentos em Wordpress e Next.js
                para desenvolver sites modernos, otimizados e de alto desempenho.
              </p>
            }
          />
          <WorkExperienceCard
            gradientDirection="left"
            title="A próxima pode ser a sua empresa!"
            description="Desenvolvedor Front-end Junior | Estagiário"
            observation=""
            src="/hand.png"
            ctaText="Ver mais"
            ctaLink=""
            content={
              <p>
                Atualmente, realizo trabalhos como freelancer, mas estou em busca de uma oportunidade 
                para ingressar de forma mais sólida na área e desenvolver minha carreira.
              </p>
            }
          />
        </div>
      </section>
      <section id="objectives" className="lg:px-52 md:px-28">
        <hr className="w-[150px] mx-auto mb-10 border-t-4 rounded-full" />
        <h1 className="text-4xl mb-6 text-center">Objetivos</h1>
        <p className="text-xl text-justify mb-10">
          Atualmente estou procurando
          <span className="text-[#874CDE]"> ingressar </span>
          em uma empresa onde eu possa colaborar em projetos desafiadores, compartilhar meus conhecimentos e continuar aprimorando minhas habilidades em desenvolvimento web, contribuindo para o
          <span className="text-[#874CDE]"> sucesso </span>
          e crescimento da empresa.
        </p>
        <hr className="w-[150px] mx-auto mt-12 border-t-4 rounded-full" />
      </section>
      <section id="hard-skills" className="flex justify-center w-full">
        <HardSkills />
      </section>
      <section id="contact" className="flex flex-col items-center mb-32">
        <hr className="w-[150px] mx-auto mb-10 border-t-4 rounded-full" />
        <h1 className="text-4xl mb-6 text-center">Vamos criar um universo de <span className="text-[#874CDE]">possibilidades</span> juntos!</h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="relative h-8 w-8">
              <Image src="/icons/linkedin.png" fill loading="lazy" alt="LinkedIn" />
            </div>
            <a href="https://www.linkedin.com/in/jhonathan-galhardo-94a284308" target="_blank" aria-label="LinkedIn">
              jhonathan-galhardo-94a284308
            </a>
          </div>
          <div className="flex gap-4">
            <div className="relative h-8 w-8">
              <Image src="/icons/wpp.png" fill loading="lazy" alt="Whatsapp" />
            </div>
            <p>(19) 99949-8128</p>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="relative h-8 w-8">
              <Image src="/icons/email.png" fill loading="lazy" alt="Email" />
            </div>
            <p>jhonathan_galhardo@hotmail.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
