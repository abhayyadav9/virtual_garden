import React from "react";
import { useUser } from "../contexts/useContext";

const Embed = () => {
  const { published } = useUser();



  return (
    <div>
      
    </div>
  );
};

export default Embed;

export const Turmeric = () => {
  return (
    <div>
      <div className="sketchfab-embed-wrapper  ml-10 h-screen w-[140vh]">
        <iframe
          title="garlic"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/02b23df2946743a4865ad5635af5a79c/embed"
          style={{ width: "100%", height: "480px" }}
        ></iframe>
      </div>
    </div>
  );
};


export const Tulsi= () => {
    return (
      <div>
        <div className="sketchfab-embed-wrapper  ml-10 h-screen w-[140vh]">
          <iframe
            title="tulsi"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src=        "https://sketchfab.com/models/c604e8f52c234f2e9259d895fe028819/embed"

            style={{ width: "100%", height: "480px" }}
          ></iframe>
        </div>
      </div>
    );
  };

  export const Neem = () => {
    return (
      <div>
        <div className="sketchfab-embed-wrapper ml-10 h-screen w-[140vh]">
          <iframe
            title="Neem"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/03edef8009d942d3a3db6fa64cecbe56/embed"
            style={{ width: "100%", height: "520px" }}
            className="justify-center items-center"
          ></iframe>
        </div>
      </div>
    );
  };

  export const Bodhi = () => {
    return (
      <div>
        <div className="sketchfab-embed-wrapper  ml-10 h-screen w-[140vh]">
          <iframe
            title="Bodhi Tree"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/943594369dc84239bc140e6e7d07a005/embed"
            style={{ width: "100%", height: "480px" }}
          ></iframe>
        </div>
      </div>
    );
  };


  export const Chamomile = () => {
    return (
      <div>
        <div className="sketchfab-embed-wrapper  ml-10 h-screen w-[140vh]">
          <iframe
            title="Chamomile"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/31df46bbac484e3aa549032d8f321b6d/embed"
            style={{ width: "100%", height: "480px" }}
          ></iframe>
        </div>
      </div>
    );
  };

//   export const Chamomile = () => {
//     return (
//       <div>
//         <div className="sketchfab-embed-wrapper">
//           <iframe
//             title="Chamomile"
//             frameBorder="0"
//             allowFullScreen
//             mozallowfullscreen="true"
//             webkitallowfullscreen="true"
//             allow="autoplay; fullscreen; xr-spatial-tracking"
//             src="https://sketchfab.com/models/31df46bbac484e3aa549032d8f321b6d/embed"
//             style={{ width: "100%", height: "480px" }}
//           ></iframe>
//         </div>
//       </div>
//     );
//   };

  