"use client";

import { Stage, Container, Sprite, Text } from "@pixi/react";
import { usePreviewStore } from "./PreviewStore";

const imgUrl =
  "https://images.unsplash.com/photo-1630713815198-17ff8a8a7103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4140&q=80";

type PostPreviewProps = {
  text: string;
};

export const PostPreview = (props: PostPreviewProps) => {
  const { text } = usePreviewStore();
  //   const { text } = props;
  return (
    <div className="flex justify-center">
      <Stage width={320} height={400}>
        <Sprite
          image={imgUrl}
          x={0}
          y={0}
          anchor={{ x: 0.5, y: 0.5 }}
          scale={0.5}
        />
        <Container x={150} y={200}>
          <Text text={text} anchor={{ x: 0.5, y: 0.5 }} />
        </Container>
      </Stage>
    </div>
  );
};
