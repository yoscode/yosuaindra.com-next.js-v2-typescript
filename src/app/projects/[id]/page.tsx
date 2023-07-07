"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetail() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [projects, setProjects] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/projects`);
      const projects = await response.json();

      const selectedProjects = projects.find((item: any) => item.slug === id);

      setProjects(selectedProjects);
    };

    fetchData();
  }, [id]);

  function getMetaData() {
    return {
      title: `Yosua Indra - Project : ${projects?.title}`,
      description: projects?.headline,
    };
  }
  const { title, description } = getMetaData();

  return (
    <>
      <div>
        <title>{title}</title>
        <meta name="description" content={description} />
      </div>
      <div className="container page-detail">
        <div className="page-title">
          <p>Project</p>
          <h1>{projects?.title}</h1>
        </div>
        <div className="tag-wrapper">
          {projects?.tags?.map((tags: any, indexTag: any) => (
            <Link href="" key={indexTag}>
              {tags.name}
            </Link>
          ))}
        </div>
        <div className="content-wrapper">
          <div className="img">
            {projects?.coverImage && (
              <Image src={projects?.coverImage} alt={projects?.title} />
            )}
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: projects?.content }}
          />
        </div>
      </div>
    </>
  );
}
