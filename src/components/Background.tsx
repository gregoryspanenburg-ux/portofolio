export function Background() {
    return (
        <div
            className="fixed inset-0 opacity-20 pointer-events-none"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }}
        />
    );
}
