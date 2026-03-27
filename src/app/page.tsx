import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto pt-6">
      <Card>
        <CardContent>
          <h1 className="text-lg">Hello World</h1>
          <Button variant="outline">Click me</Button>
        </CardContent>
      </Card>
    </div>
  );
}
