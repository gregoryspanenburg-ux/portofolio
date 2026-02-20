
export function smoothScrollToTop(navigate: () => void) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate();
}
