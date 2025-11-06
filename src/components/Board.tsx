// src/components/Board.tsx
import React from "react";
import { Linkedin } from "lucide-react";
import styles from "./Board.module.css";

type Member = {
  id: string;
  name: string;
  title: string;
  bio?: string;
  imgSrc: string; // absolute URL or relative path (e.g. "/images/rajat.jpg")
  linkedin?: string;
  email?: string;
};

const members: Member[] = [
  {
    id: "rajat-moona",
    name: "Prof. Rajat Moona",
    title: "Director of IIT Gandhinagar",
    bio: "Former Director General of CDAC, known for his work in secure computing and governance",
    imgSrc: "./images/Board_1.jpg",
    linkedin: "https://www.linkedin.com/in/rajat-moona",
  },
  {
    id: "amit-prashant",
    name: "Prof. Amit Prashant",
    title: "Dean of External Relations",
    bio: "Expert in geotechnical engineering with a PhD from University of Tennessee",
    imgSrc: "./images/Board_2.jpg",
    linkedin: "https://www.linkedin.com/in/amit-prashant",
  },
  {
    id: "pk-chopra",
    name: "P. K. Chopra",
    title: "Registrar, IIT Gandhinagar",
    bio: "Director at IITGN Innovation Center",
    imgSrc: "./images/Board_3.jpg",
    linkedin: "https://www.linkedin.com/in/pk-chopra",
  },
  {
    id: "sam-placid",
    name: "Prof. Sam Placid",
    title: "Advisor, IITGN CAA",
    bio: "Leading industry-aligned programs in GenAI and Data Science",
    imgSrc: "./images/Board_4.jpg",
    linkedin: "https://www.linkedin.com/in/sam-placid",
  },
];

export const Board: React.FC<{ membersList?: Member[] }> = ({ membersList }) => {
  const list = membersList ?? members;

  return (
    <section aria-labelledby="board-heading" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 id="board-heading" className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Board of Directors
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Distinguished leaders and experts guiding our program towards excellence in technology education.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {list.map((m, index) => (
            <div
              key={m.id}
              className={`group bg-card shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in ${styles[`delay${index * 100}`]} p-6 rounded-2xl`}
            >
              <div className="-mt-12 mb-4 mx-auto w-fit">
                <div className="rounded-full bg-gradient-to-br from-primary/10 to-primary/5 p-1 shadow-md">
                  <img
                    src={m.imgSrc}
                    alt={`Portrait of ${m.name}`}
                    className="rounded-full object-cover w-28 h-28 md:w-32 md:h-32 shadow-sm"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="text-center mt-2">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 flex items-center justify-center gap-2">
                  <span>{m.name}</span>
                  {m.linkedin && (
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${m.name} on LinkedIn`} className="w-6 h-6 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                </h3>
                <p className="text-sm text-primary mb-2">{m.title}</p>
                {m.bio && <p className="text-sm text-muted-foreground leading-snug">{m.bio}</p>}
                {m.email && (
                  <div className="mt-3">
                    <a href={`mailto:${m.email}`} className="text-muted-foreground hover:underline text-sm">
                      Email
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Board;
