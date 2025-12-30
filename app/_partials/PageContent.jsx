"use client"

import { useSelector } from "react-redux";
import { RenderSections } from "./RenderSections";

export default function PageContent({ slug, sections = [] }) {
   
    
    const customPageData = useSelector((state) => state.customPage.data);

    const pages = customPageData?.data?.pages;
    const page = Array.isArray(pages) ? pages.find(page => page.slug === slug) : null;

    return (
        <>
            {page && <RenderSections page={page} sections={JSON.parse(sections)} />}
        </>
    )
}
