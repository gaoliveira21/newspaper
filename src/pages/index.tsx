import { Banner } from "@/components/molecules"
import { NewsSection } from "@/components/organisms"
import { AppTemplate } from "@/components/templates/AppTemplate"

export default function Home() {
  return (
    <AppTemplate>
      <Banner />

      <NewsSection title="Movies" />
      <NewsSection title="Books" />

    </AppTemplate>
  )
}
