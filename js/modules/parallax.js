// Mouse Move Parallax Module
(function () {
  window.CRMFactory = window.CRMFactory || {};

  let shapes = [];
  let mouseMoveHandler = null;

  window.CRMFactory.initParallax = function (shapesSelector) {
    shapes = [...document.querySelectorAll(shapesSelector)];
    if (shapes.length === 0) return;

    mouseMoveHandler = (e) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      
      // Normalize coordinates from -0.5 to 0.5
      const cx = (e.clientX / w) - 0.5;
      const cy = (e.clientY / h) - 0.5;
      
      shapes.forEach((el) => {
        const depth = parseFloat(el.dataset.depth) || 0;
        const baseRotation = parseFloat(el.dataset.rot) || 0;
        
        const xTranslate = (-cx * depth).toFixed(1);
        const yTranslate = (-cy * depth).toFixed(1);
        const rotation = (baseRotation + cx * depth * 0.1).toFixed(2);
        
        el.style.transform = `translate3d(${xTranslate}px, ${yTranslate}px, 0) rotate(${rotation}deg)`;
      });
    };

    window.addEventListener('mousemove', mouseMoveHandler, { passive: true });
  };

  window.CRMFactory.destroyParallax = function () {
    if (mouseMoveHandler) {
      window.removeEventListener('mousemove', mouseMoveHandler);
      mouseMoveHandler = null;
    }
    shapes = [];
  };
})();
