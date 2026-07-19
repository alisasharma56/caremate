import { SideCard } from "../SideCard/SideCard.tsx";
import { KeywordRow } from "../KeywordRow/KeywordRow.tsx";

export function EmergingKeywordsCard() {
    return (
        <SideCard title="Emerging Keywords">
            <KeywordRow rank={1} keyword="SIL funding" change="↑↑ 94%" />
            <KeywordRow rank={2} keyword="Price guide" change="↑ 67%" />
            <KeywordRow rank={3} keyword="Registration" change="↑ 52%" />
            <KeywordRow rank={4} keyword="AAT appeals" change="↑ 41%" />
            <KeywordRow rank={5} keyword="Indep. assess." change="↑ 29%" />
        </SideCard>
    );
}