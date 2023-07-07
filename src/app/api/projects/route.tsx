import { NextResponse } from "next/server";
import listrikKita from "@/assets/img/projects/listrikkita.jpg";
import tenggara from "@/assets/img/projects/tenggara.dev.jpg";
import mantle from "@/assets/img/projects/mantle.jpg";
import nftRetail from "@/assets/img/projects/nft-retail.jpg";
import nftSoulbound from "@/assets/img/projects/nft-soulbound.jpg";

export async function GET(request) {
  const projects = [
    {
      slug: "tenggara-nft-use-case-demo-website",
      title: "Tenggara - NFT Use Case Demo Website",
      headline:
        "Introducing a website that showcases a live demonstration of an NFT use case, exploring the transformative potential of Web3 technologies for the retail industry.",
      coverImage: nftRetail,
      tags: [
        { name: "Demo", url: "" },
        { name: "Front-end Development", url: "" },
        { name: "Slicing From Figma", url: "" },
        { name: "Responsive Design", url: "" },
        { name: "JavaScript", url: "" },
        { name: "Next.js", url: "" },
        { name: "Material UI", url: "" },
        { name: "SASS", url: "" },
      ],
      content: `
      <p>Web3 is the blockchain-based third generation of the internet that enables direct user interaction and transactions without intermediaries. 
      NFTs and tokenization authenticate products, offer exclusive access, and track ownership. 
      This use case demonstrates how Web3 principles, such as NFTs and smart contracts, enhance authentication, customer rewards, and transparent transactions. 
      It showcases the transformation of traditional retail in the digital age.<p>
      <br />
      <p>
      I designed and developed this website with a primary focus on the front-end and collaborated with my colleagues at Tenggara.
      I sliced the design from Figma and built the code using Next.js, JavaScript, Material UI and Sass. 
      To enhance user experience, I made sure that the website is responsive 
      and can adapt to various devices like desktop, mobile, and tablet.
      </p>
      <br />
      <p>
        You can see the demo website at this <a href="https://demonft.tenggara.dev" target="_blank">link</a>.
      </p>
      <br />
      <h2>Technologies used</h2>
      <ul>
        <li>
          <a href="https://nextjs.org" target="_blank">Next.js</a>
        </li>
        <li>
          <a href="https://www.javascript.com/" target="_blank">JavaScript</a>
        </li>
        <li>
          <a href="https://mui.com" target="_blank">Material UI</a>
        </li>
        <li>
          <a href="https://sass-lang.com" target="_blank">Sass</a>
        </li>
      </ul>
      `,
    },
    {
      slug: "tenggara-nft-soulbound-tokens-demo-website",
      title: "Tenggara - NFT Soulbound Tokens Demo Website",
      headline:
        "Tenggara proposes using Soulbound Tokens as a requirement for transferring NFTs, integrating blockchain into traditional systems.",
      coverImage: nftSoulbound,
      tags: [
        { name: "Demo", url: "" },
        { name: "Front-end Development", url: "" },
        { name: "Slicing From Figma", url: "" },
        { name: "Responsive Design", url: "" },
        { name: "JavaScript", url: "" },
        { name: "Next.js", url: "" },
        { name: "Material UI", url: "" },
        { name: "SASS", url: "" },
      ],
      content: `
      <p>Tenggara proposes using Soulbound Tokens as a requirement for transferring NFTs, integrating blockchain into traditional systems. 
      This ensures accountability, security, and opens up new business opportunities. 
      Soulbound Tokens associate real-world identities with blockchain addresses, acting as gatekeepers. 
      NFTs represent assets and can only be transferred to addresses with Soulbound Tokens. 
      This approach merges blockchain with traditional systems and offers benefits in digital transactions.<p>
      <br />
      <p>
      I designed and developed this website with a primary focus on the front-end and collaborated with my colleagues at Tenggara.
      I sliced the design from Figma and built the code using Next.js, JavaScript, Material UI and Sass. 
      To enhance user experience, I made sure that the website is responsive 
      and can adapt to various devices like desktop, mobile, and tablet.
      </p>
      <br />
      <p>
        You can see the demo website at this <a href="https://demosoulbound.tenggara.dev" target="_blank">link</a>.
      </p>
      <br />
      <h2>Technologies used</h2>
      <ul>
        <li>
          <a href="https://nextjs.org" target="_blank">Next.js</a>
        </li>
        <li>
          <a href="https://www.javascript.com/" target="_blank">JavaScript</a>
        </li>
        <li>
          <a href="https://mui.com" target="_blank">Material UI</a>
        </li>
        <li>
          <a href="https://sass-lang.com" target="_blank">Sass</a>
        </li>
      </ul>
      `,
    },
    {
      slug: "tenggara-mantle-personalized-block-explorer",
      title: "Tenggara - Mantle Personalized Block Explorer",
      headline:
        "Discover a simplified block explorer designed for non-native crypto users. Easily explore transactions and track progress with a user-friendly interface that demystifies blockchain technology.",
      coverImage: mantle,
      tags: [
        { name: "open source", url: "" },
        { name: "Front-end Development", url: "" },
        { name: "Slicing From Figma", url: "" },
        { name: "Responsive Design", url: "" },
        { name: "JavaScript", url: "" },
        { name: "Next.js", url: "" },
        { name: "Material UI", url: "" },
        { name: "SASS", url: "" },
      ],
      content: `
      <p>Mantle Personalized Block Explorer is a simplified block explorer for non native crypto users.
      Easily explore transactions and track progress with a user-friendly interface that demystifies blockchain technology.<p>
      <br />
      <p>
      I collaborated with my colleagues at Tenggara to participate in the Mantle Mash Gitcoin Hackathon Bounty (UX category) and build this project. 
      You can check the details at this <a href="https://www.tenggara.dev/portfolio/mantle-personalized-block-explorer" target="_blank">link</a> or on <a href="https://github.com/tenggaradev/hackanton-mantle-nextjs" target="_blank">GitHub</a>.</p>
      <br />
      <p>
      I designed and developed this website with a primary focus on the front-end.
      I sliced the design from Figma and built the code using Next.js, JavaScript, Material UI and Sass. 
      To enhance user experience, I made sure that the website is responsive 
      and can adapt to various devices like desktop, mobile, and tablet.
      </p>
      <br />
      <p>
        You can see the website at this <a href="https://tenggara-hackanton-mantle.vercel.app" target="_blank">link</a>.
      </p>
      <br />
      <h2>Technologies used</h2>
      <ul>
        <li>
          <a href="https://nextjs.org" target="_blank">Next.js</a>
        </li>
        <li>
          <a href="https://www.javascript.com/" target="_blank">JavaScript</a>
        </li>
        <li>
          <a href="https://mui.com" target="_blank">Material UI</a>
        </li>
        <li>
          <a href="https://sass-lang.com" target="_blank">Sass</a>
        </li>
      </ul>
      `,
    },
    {
      slug: "tenggara-blockchain-services",
      title: "Tenggara Blockchain Services",
      headline:
        "Tenggara is a blockchain development agency that helps businesses build scalable blockchain projects.",
      coverImage: tenggara,
      tags: [
        { name: "Front-end Development", url: "" },
        { name: "Slicing From Figma", url: "" },
        { name: "Responsive Design", url: "" },
        { name: "JavaScript", url: "" },
        { name: "Next.js", url: "" },
        { name: "SASS", url: "" },
      ],
      content: `
      <p>Tenggara is a blockchain development agency that helps businesses build scalable blockchain projects.
      And i&apos;m also part of Tenggara as a Co-Founder and Front-End Developer.</p>
      <br />
      <p>
      I designed and developed this website with a primary focus on the front-end and collaborated with my colleagues at Tenggara.
      I sliced the design from Figma and built the code using Next.js, JavaScript, and Sass. 
      To enhance user experience, I made sure that the website is responsive 
      and can adapt to various devices like desktop, mobile, and tablet.
      </p>
      <br />
      <p>
        You can see the website at this <a href="https://www.tenggara.dev" target="_blank">link</a>.
      </p>
      <br />
      <h2>Technologies used</h2>
      <ul>
        <li>
          <a href="https://nextjs.org" target="_blank">Next.js</a>
        </li>
        <li>
          <a href="https://www.javascript.com/" target="_blank">JavaScript</a>
        </li>
        <li>
          <a href="https://sass-lang.com" target="_blank">Sass</a>
        </li>
      </ul>
      `,
    },
    {
      slug: "e-commerce-website",
      title: "E-Commerce Website",
      headline:
        "I designed and developed this e-commerce website project with a primary focus on the front-end. The result is an HTML template that I built using Nunjucks, JavaScript, jQuery, Sass, and Gulp. To enhance user experience, I made sure that the website is responsive and can adapt to various devices like desktop, mobile, and tablet.",
      coverImage: listrikKita,
      tags: [
        { name: "Front-end Development", url: "" },
        { name: "Responsive Design", url: "" },
        { name: "HTML", url: "" },
        { name: "JavaScript", url: "" },
        { name: "jQuery", url: "" },
        { name: "Nunjucks", url: "" },
        { name: "SASS", url: "" },
        { name: "Gulp", url: "" },
      ],
      content: `
      <p>
        I designed and developed this e-commerce website project with a primary focus on the front-end. 
        The result is an HTML template that I built using Nunjucks, jQuery, Sass, and Gulp. To
        enhance user experience, I made sure that the website is responsive
        and can adapt to various devices like desktop, mobile, and tablet.
      </p>
      <br />
      <p>
        You can see this project at this <a href="https://listrikkita.com" target="_blank">link</a>.
      </p>
      <br />
      <h2>Technologies used</h2>
      <ul>
        <li>
          <a href="https://mozilla.github.io/nunjucks" target="_blank">Nunjucks</a>
        </li>
        <li>
          <a href="https://www.javascript.com/" target="_blank">JavaScript</a>
        </li>
        <li>
          <a href="https://jquery.com" target="_blank">jQuery</a>
        </li>
        <li>
          <a href="https://sass-lang.com" target="_blank">Sass</a>
        </li>
        <li>
          <a href="https://gulpjs.com" target="_blank">Gulp</a>
        </li>
      </ul>
      `,
    },
  ];
  return NextResponse.json(projects, { status: 200 });
}
