import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Snowfall from "react-snowfall";
import Layout from "../components/Layout";
import magic from "../assets/images/neff_magic.jpeg";
import { Helmet } from "react-helmet";

export default function Home() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        allFile(
          filter: {
            relativeDirectory: { eq: "merch" }
            extension: { eq: "jpeg" }
          }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 1000, quality: 100)
              }
            }
          }
        }
      }
    `
  );

  const renderMerch = () => {
    const edges = data.allFile.edges;

    return edges.map((item) => {
      const img = getImage(item.node.childImageSharp);
      return (
        <div
          key={item.node.id}
          className="w-full relative h-auto group overflow-hidden"
        >
          <GatsbyImage
            image={img}
            alt="Will Neff Merch"
            className="w-full h-full transition-transform duration-200 ease-in-out scale-105 group-hover:scale-100 group-hover:saturate-[1.25]"
          />
          <div className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:cursor-pointer grid transition-all duration-200 ease-in-out left-0 w-full h-full bg-black/30 place-items-center pt-16">
            <span className="bg-black/30 text-white p-2 rounded-full uppercase text-2xl">
              {item.node.name}
            </span>
          </div>
        </div>
      );
    });
  };

  return (
    <Layout>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: `description`,
            content: data.site.siteMetadata.description,
          },
          {
            property: `og:title`,
            content: data.site.siteMetadata.title,
          },
          {
            property: `og:description`,
            content: data.site.siteMetadata.description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
        ]}
      >
        <meta name="icon" href="../assets/images/favicon-16x16.png" />
      </Helmet>

      <div className="fixed top-0 left-0 z-50 w-screen h-screen pointer-events-none">
        <Snowfall color="red" snowflakeCount={10} />
      </div>

      <div className="relative flex items-center content-center justify-center pt-16 pb-32 min-h-[75vh]">
        <div className="absolute top-0 w-full h-full bg-fixed bg-center bg-no-repeat bg-cover neff-banner">
          <span
            id="blackOverlay"
            className="absolute w-full h-full bg-black/75"
          ></span>
        </div>
        <div className="container relative mx-auto mt-12">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 ml-auto mr-auto text-center lg:w-7/12">
              <div className="hero-container">
                <h2
                  className="text-3xl md:text-5xl hero glitch layers"
                  data-text="HEY NOW..."
                >
                  <span>HEY NOW...</span>
                </h2>
              </div>
              <p className="mt-4 text-xl md:text-2xl text-gray-300 font-roboto">
                My name is <span className="text-3xl">Will Neff</span>.
                <br />
                You can find me on{" "}
                <a
                  className="underline transition-colors duration-200 ease-in-out rounded-lg decoration-white/70 hover:bg-red-500/20 decoration-dotted decoration-2"
                  href="https://twitch.tv/willneff"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitch
                </a>
                , co-hosting{" "}
                <a
                  className="underline transition-colors duration-200 ease-in-out rounded-lg decoration-white/70 hover:bg-red-500/20 decoration-dotted decoration-2"
                  href="https://twitch.tv/g4tv"
                  target="_blank"
                  rel="noreferrer"
                >
                  G4TV's
                </a>{" "}
                Attack of the Show, co-hosting{" "}
                <a
                  className="underline transition-colors duration-200 ease-in-out rounded-lg decoration-white/70 hover:bg-red-500/20 decoration-dotted decoration-2"
                  href="https://www.youtube.com/channel/UCnI_h3e6b5jGLfly2SY57SA"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fear & Malding{" "}
                </a>
                with Hasan Piker or making all manner of content with{" "}
                <a
                  className="underline transition-colors duration-200 ease-in-out rounded-lg decoration-white/70 hover:bg-red-500/20 decoration-dotted decoration-2"
                  href="https://www.youtube.com/channel/UCnrX2_FoKieobtw19PiphDw"
                  target="_blank"
                  rel="noreferrer"
                >
                  100 Thieves
                </a>
                .<span className="block mt-4">Stay a while and listen.</span>
                {/* Hey now! My name is Will Neff. I'm a Twitch streamer, co-host
                  of G4TV's Attack of the Show, co-host of Fear & Malding with
                  Hasan Piker and content creator for 100 Thieves. You can find
                  me on stream ripping it up in a variety of games or watching
                  all sorts of films with my chat. Stay a while and listen. */}
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none h-[70px]"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-current text-primary-red"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section className="pb-20 -mt-24 bg-primary-red">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="relative w-full px-4 mt-6 text-center md:w-4/12 group">
              <div className="relative flex flex-col w-full min-w-0 mb-8 overflow-hidden break-words transition-all duration-200 ease-in-out bg-center bg-no-repeat bg-cover rounded-lg shadow-lg group-hover:outline-gray-400 group-hover:outline group-hover:outline-2 bg-black/40 neff-g4 bg-blend-darken">
                <div className="flex-auto px-4 py-5">
                  <div className="w-12 h-12 p-3 mb-5"></div>
                  <h6 className="text-3xl font-semibold tracking-wider text-white font-bebas">
                    G4TV: Attack of the Show
                  </h6>
                  <p className="relative mt-2 mb-4 text-white transition-transform duration-300 ease-in-out rounded-lg lg:translate-y-full lg:group-hover:translate-y-1/4 bg-black/40 font-roboto">
                    <span className="absolute hidden text-4xl transition-opacity duration-200 ease-in-out opacity-100 -top-8 group-hover:opacity-0 lg:block animate-bounce left-1/2">
                      ˰
                    </span>
                    G4's go-to series for all things relevant in pop culture,
                    "Attack of the Show!" gets viewers on the inside track of
                    the world of entertainment.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 text-center md:w-4/12 group">
              <div className="relative flex flex-col w-full min-w-0 mb-8 overflow-hidden break-words bg-top bg-no-repeat bg-cover rounded-lg shadow-lg group-hover:outline-gray-400 group-hover:outline group-hover:outline-2 neff-fear bg-blend-darken bg-black/40">
                <div className="flex-auto px-4 py-5">
                  <div className="w-12 h-12 p-3 mb-5"></div>
                  <h6 className="text-3xl font-semibold tracking-wider text-white font-bebas">
                    Fear & Malding
                  </h6>
                  <p className="relative mt-2 mb-4 text-white transition-transform duration-300 ease-in-out rounded-lg lg:translate-y-full lg:group-hover:translate-y-[20%] bg-black/40 font-roboto">
                    <span className="absolute hidden text-4xl transition-opacity duration-200 ease-in-out opacity-100 -top-8 lg:block group-hover:opacity-0 animate-bounce left-1/2">
                      ˰
                    </span>
                    In an era where real life events transcend any comedic
                    writing, Fear & Malding attempts to make sense of the
                    senseless mania by looking at the material reasons behind
                    actions, and offers historical perspective when necessary.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 pt-6 text-center md:w-4/12 group">
              <div className="relative flex flex-col w-full min-w-0 mb-8 overflow-hidden break-words bg-center bg-no-repeat bg-cover rounded-lg shadow-lg lg:bg-top group-hover:outline-gray-400 group-hover:outline group-hover:outline-2 neff-thieves bg-blend-darken bg-black/40">
                <div className="flex-auto px-4 py-5">
                  <div className="w-12 h-12 p-3 mb-5"></div>
                  <h6 className="text-3xl font-semibold tracking-wider text-white font-bebas">
                    100 Thieves
                  </h6>
                  <p className="relative mt-2 mb-4 text-white transition-transform duration-300 ease-in-out rounded-lg lg:translate-y-full lg:group-hover:translate-y-[20%] bg-black/40 font-roboto group">
                    <span className="absolute hidden text-4xl transition-opacity duration-200 ease-in-out opacity-100 -top-8 lg:block group-hover:opacity-0 animate-bounce left-1/2">
                      ˰
                    </span>
                    100 Thieves is a premium lifestyle brand and gaming
                    organization founded in 2017 by Matthew "Nadeshot" Haag. 100
                    Thieves' mission is to give every gamer something to be
                    proud of.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BIO SECTION */}
          <div className="flex flex-wrap items-center mt-32 font-roboto">
            <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
              <div className="hero-container">
                <h2
                  className="text-2xl md:text-4xl hero glitch layers"
                  data-text="ARCH VILLAIN"
                >
                  <span>ARCH VILLAIN</span>
                </h2>
              </div>
              <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-100">
                Debitis sit occaecati ut nam sequi sapiente nihil. Et maxime a
                delectus ea laudantium. Aut nam voluptatem enim dolor et dolorem
                laudantium aut.
              </p>
              <p className="mt-0 mb-4 text-lg font-light leading-relaxed text-gray-100">
                Labore voluptatem ratione repellat qui. Incidunt ut non et omnis
                debitis. Et consequatur perspiciatis impedit iusto expedita et
                non totam. Quod et nesciunt excepturi harum pariatur accusamus
                sunt rerum. Est qui ut et rerum similique cupiditate voluptate.
                Occaecati rerum quibusdam sapiente fugit nisi sequi harum qui
                quam.
              </p>
              <a
                href="/"
                className="mt-8 font-bold text-gray-400 underline decoration-dotted decoration-red-300"
              >
                Occaecati inventore qui aliquam maxime a!
              </a>
            </div>

            <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
              <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-indigo-400 rounded-lg shadow-lg">
                <img
                  alt="Will Neff Magic Card"
                  src={magic}
                  className="object-contain rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 block w-full"
                    style={{
                      height: "95px",
                      top: "-94px",
                    }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-indigo-400 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white font-bebas">
                    Quasi voluptatem inventore
                  </h4>
                  <p className="mt-2 font-light text-white text-md">
                    Nihil voluptatem ut amet cupiditate. Cupiditate ipsam et
                    minus ut optio sed. Est quae nostrum iste nisi. Voluptatem
                    esse et rerum delectus repellendus alias veritatis explicabo
                    nemo.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MERCH SECTION */}
      <section className="relative px-4 py-20">
        <div
          className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-black fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container px-4 mx-auto">
          <div className="hero-container">
            <h2
              className="text-3xl md:text-5xl mb-4 hero glitch layers"
              data-text="MERCH"
            >
              <span>MERCH</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 mx-auto lg:grid-cols-3 md:w-5/6">
            {renderMerch()}
          </div>
        </div>
      </section>
    </Layout>
  );
}
