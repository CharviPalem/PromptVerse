import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
        <div>
          <p>Dashboard (Protected) </p>
          <UserButton />
        </div>
    )
    
}
