import {getAboutPageMarkdown} from "@/lib/fs/fs";

const ABOUT_PAGE_PATH = ["public", "content", "about", "about.md"]

const AboutPage = async () => {
  const data = await getAboutPageMarkdown(ABOUT_PAGE_PATH);
  if ("error" in data) {
    throw Error(data.error);
  }
  const content = data.content;

  return (
    <main>
      <p>{content}</p>
    </main>
  );
};

export default AboutPage;
