"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

function getMetaData() {
  return {
    title: "Yosua Indra - Projects",
    description:
      "Explore my collection of front-end projects showcasing innovative websites and applications, and let's collaborate on your exciting project!",
  };
}

export default function Projects() {
  const { title, description } = getMetaData();
  const [projects, setProjects] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/projects`);
      const projects = await response.json();

      setProjects(projects);
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <title>{title}</title>
        <meta name="description" content={description} />
      </div>
      <div className="container">
        <div className="page-title">
          <h1>Projects</h1>
          <p>
            Explore my collection of front-end projects showcasing innovative
            websites and applications, and let&apos;s collaborate on your
            exciting project!
          </p>
        </div>
        <div className="card-project-wrapper">
          {projects?.map((item: any, index: any) => (
            <div className="card" key={index}>
              <div className="img">
                <Image src={item.coverImage} alt={item.title} />
              </div>
              <div className="desc">
                <h2>{item.title}</h2>
                <div className="tag-wrapper">
                  {item.tags?.map((tags: any, indexTag: any) => (
                    <Link href="" key={indexTag}>
                      {tags.name}
                    </Link>
                  ))}
                </div>
                <p>{item.headline}</p>
                <Link
                  href="/projects/[id]"
                  as={`/projects/${item.slug}`}
                  className="btn-default"
                >
                  Learn More <FaChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
