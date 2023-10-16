"use client";

import { use, useEffect } from "react";
import * as PIXI from "pixi.js";
import { Stage, Container, Sprite, Text, withFilters } from "@pixi/react";
import { AdjustmentFilter } from "@pixi/filter-adjustment";
import { usePreviewStore } from "../stores/PreviewStore";

const imgUrl =
  "https://images.unsplash.com/photo-1630713815198-17ff8a8a7103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4140&q=80";

type PostPreviewProps = {
  text: string;
};

const Filters = withFilters(Container, {
  adjust: AdjustmentFilter,
});

interface Draggable extends PIXI.Sprite {
  data: PIXI.FederatedEvent | null;
  dragging: boolean;
}

let startPosition = {
  x: 0,
  y: 0,
};

const onPointerDown = (event: PIXI.FederatedEvent) => {
  console.log("onPointerDown");
  const target = event.currentTarget as Draggable;
  target.alpha = 0.9;
  target.dragging = true;

  console.log("startPosition DOWN");
  console.log("startPosition.x: " + startPosition.x);
  console.log("startPosition.y: " + startPosition.y);
};

const onPointerUp = (event: PIXI.FederatedEvent) => {
  console.log("onPointerUp");
  const target = event.currentTarget as Draggable;
  target.alpha = 1;
  target.dragging = false;

  console.log("target.width: " + target.width);
  console.log("target.height: " + target.height);

  startPosition = {
    x: target.x,
    y: target.y,
  };

  //   console.log("startPosition UP");
  //   console.log("startPosition.x: " + startPosition.x);
  //   console.log("startPosition.y: " + startPosition.y);
};

const onPointerOut = (event: PIXI.FederatedEvent) => {
  const target = event.currentTarget as Draggable;
  target.dragging = false;
  console.log("onPointerOut");

  startPosition = {
    x: target.x,
    y: target.y,
  };
};

const onPointerMove = (event: PIXI.FederatedEvent) => {
  const target = event.currentTarget as Draggable;
  if (!target.dragging) return;

  //   console.log("onPointerMove");
  //   console.log("X: " + event.pageX);
  //   console.log("Y: " + event.pageY);

  //   console.log("target");
  //   console.log("target.x: " + target.x);
  //   console.log("target.y: " + target.y);

  target.x = event.pageX;
  target.y = event.pageY;
};

export const PostPreview = (props: PostPreviewProps) => {
  const { text, bgUrl } = usePreviewStore();

  return (
    <div className="flex justify-center">
      <Stage width={320} height={400}>
        <Filters scale={1} adjust={{ saturation: 0 }}>
          <Sprite
            image={bgUrl}
            x={0}
            y={0}
            anchor={{ x: 0.5, y: 0.5 }}
            scale={0.5}
            eventMode="static"
            pointerdown={onPointerDown}
            pointerup={onPointerUp}
            pointermove={onPointerMove}
            pointerout={onPointerOut}
          />
        </Filters>

        <Container x={160} y={30}>
          <Text
            text={"Some brand"}
            anchor={{ x: 0.5, y: 0.5 }}
            style={smallTextStyle}
          />
        </Container>
        <Container x={300} y={380}>
          <Text text={text} anchor={{ x: 1, y: 1 }} style={textStyle} />
        </Container>
      </Stage>
    </div>
  );
};

const smallTextStyle = new PIXI.TextStyle({
  align: "center",
  fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
  fontSize: 20,
  fill: "white",
});

const textStyle = new PIXI.TextStyle({
  align: "right",
  fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
  fontSize: 70,
  fontWeight: "800",
  fill: "#5EEAD4", // gradient
  dropShadow: true,
  dropShadowColor: "#000000",
  dropShadowDistance: 3,
  wordWrap: true,
  wordWrapWidth: 300,
});
