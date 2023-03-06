<script>
    const zoom = (node, scale = 1.5) => {
        node.style.transition = ".5s";
        console.log(scale);
        const zoomIn = () => {
            node.style.transform = `scale(${scale})`;
        };
        const zoomOut = () => {
            node.style.transform = "scale(1)";
        };

        node.addEventListener("mouseenter", zoomIn);
        node.addEventListener("mouseleave", zoomOut);
        return {
            destroy: () => {
                node.removeEventListener("mouseenter", zoomIn);
                node.removeEventListener("mouseleave", zoomOut);
            },
        };
    };
</script>

<div use:zoom />
<div use:zoom={0.7}></div>

<style>
    div {
        width: 100px;
        height: 100px;
        background-color: tomato;
        margin: 50px 50px;
    }
</style>
