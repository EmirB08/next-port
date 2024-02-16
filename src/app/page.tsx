import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    
    <Button variant="link" asChild>
    <Link href="/login">Login</Link>
  </Button>
  
  );
}
