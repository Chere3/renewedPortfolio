import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Portfolio | Aún en construcción",
  description: "Chere3",
};

export default function Home() {
  return (
    <div>
      <header>
        <div>
          <Image src="/website/logo.png" alt="logo" width={100} height={100} />
          <span>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Acerca de mí</a>
              </li>
              <li>
                <a href="#">Proyectos</a>
              </li>
              <li>
                <a href="#">Contactame</a>
              </li>
            </ul>
          </span>
        </div>
      </header>
      <main>
        <div>
          <h1>
            <span>Cheree</span>
            <span>3</span>
          </h1>
          <h2>Desarrollador web</h2>
          <p>
            Soy un desarrollador, apasionado por la tecnología y la
            programación, me gusta aprender cosas nuevas y compartir lo que
            aprendo con los demás.
          </p>
          <div>
            <a href="#">Ver mi portafolio</a>
          </div>
        </div>
        <div>
          <Image src="/website/hero.png" alt="hero" width={100} height={100} />
        </div>
      </main>
    </div>
  );
}
