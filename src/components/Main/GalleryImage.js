import React from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { GalleryContainer, GalleryText } from "./Gallery.styled";

const GROUP2 = [
  "./assets/Mask Group 94@2x.png",
  "./assets/Mask Group 151@2x.png",
  "./assets/Mask Group 152@2x.png",
  "./assets/Mask Group 156@2x.png",
  "./assets/Mask Group 157@2x.png",
  "./assets/Mask Group 155@2x.png",
  "./assets/Mask Group 155@2x.png",
];

const PhotoItem = ({ image, thumb, group }) => (
  <div style={{ maxWidth: "400px", width: "370px", padding: "10px" }}>
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img src={image} style={{ width: "100%" }} />
      <div class="caption">{/* <h4>Image</h4> */}</div>
    </LightgalleryItem>
  </div>
);

const Gallary = () => {
  return (
 
      <GalleryContainer>
        <GalleryText>
          <h4>GALLERY</h4>
        </GalleryText>
        <LightgalleryProvider>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {GROUP2.map((p, idx) => (
              <PhotoItem key={idx} image={p} group="group2" />
            ))}
          </div>
        </LightgalleryProvider>
      </GalleryContainer>

  );
};

export default Gallary;
