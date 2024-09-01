import React from "react";
import {
  Card,
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Image,
  Icon,
  Label,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

function BookmarkCard({ bookmark: { image, url, title, description } }) {
  return (
    <Card fluidstyle={{ width: "300px", height: "400px", overflow: "hidden" }}>
      <div
        style={{
          width: "100%",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 128, 128, 0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image src={image} style={{ maxHeight: "100%", maxWidth: "100%" }} />
      </div>
      <Card.Content>
        <Card.Header
          style={{
            fontSize: "16px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {url}
        </Card.Header>
        <Card.Meta
          style={{
            fontSize: "14px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Card.Meta>
        <Card.Description
          style={{
            fontSize: "12px",
            height: "100px",
            overflowY: "auto",
            paddingRight: "5px",
            scrollbarWidth: "thin",
          }}
        >
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default BookmarkCard;
