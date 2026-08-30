import { InboxSidebar } from "../Inboxsidebar/Inboxsidebar.tsx";
import { ChatPanel } from "../ChatPanel/Chatpanel.tsx";
import { InboxSelectionProvider } from "../Inboxselectioncontext.tsx";

export function InboxPage() {
    return (
        <InboxSelectionProvider>
            <div style={{ display: "flex", height: "100%" }}>
                <InboxSidebar />
                <ChatPanel />
            </div>
        </InboxSelectionProvider>
    );
}