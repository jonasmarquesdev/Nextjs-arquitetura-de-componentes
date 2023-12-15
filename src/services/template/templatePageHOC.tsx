import Head from "next/head";
import { TemplateConfig } from "./withTemplateConfig";

interface templatePageHOCProps {
  title?: string;
}
export default function templatePageHOC(
  Component: (props: any) => JSX.Element, 
  templatePageHOCProps: templatePageHOCProps = {}
) {
  return function WrappedComponent(props: { templateConfig: TemplateConfig }) {
    return (
      <>
        <Head>
          <title>
            {templatePageHOCProps.title
              ? `${templatePageHOCProps.title} | ${props.templateConfig.site.title}`
              : props.templateConfig.site.title}
          </title>
        </Head>
        <Component {...props} />
      </>
    )
  }
}
