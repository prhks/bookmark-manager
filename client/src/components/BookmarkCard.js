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
    <Card fluid>
      <Image
        src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
        wrapped
        ui={false}
      />
      <CardContent>
        <CardHeader>https://www.mongodb.com</CardHeader>
        <CardMeta as={Link} to={`/bookmarks/${id}`}>
          MongoDB
        </CardMeta>
        <CardDescription>The number one NoSQL for developers.</CardDescription>
      </CardContent>
    </Card>
  );
}

export default BookmarkCard;
