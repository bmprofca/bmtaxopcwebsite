import SEO from "../components/layout/SEO";
import { Button, Container, Eyebrow } from "../components/ui/Primitives";
import Seal from "../components/ui/Seal";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
        noindex
      />
      <section className="flex min-h-[70vh] items-center bg-paper-100">
        <Container className="flex flex-col items-center gap-8 py-24 text-center">
          <Seal label="RECORD NOT FOUND" sub={"ERROR \u2022 404"} className="h-32 w-32" />
          <div>
            <Eyebrow>404</Eyebrow>
            <h1 className="text-3xl font-semibold text-ink-800 sm:text-4xl">
              This page hasn&apos;t been filed.
            </h1>
            <p className="mx-auto mt-4 max-w-sm text-ink-700/70">
              The page you&apos;re looking for doesn&apos;t exist or may have moved.
            </p>
          </div>
          <Button to="/" variant="primary">
            Back to home
          </Button>
        </Container>
      </section>
    </>
  );
}
