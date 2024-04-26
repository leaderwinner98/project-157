AFRAME.registerComponent('poster', {
    init: function() {
        this.createThumbnails();
        this.createBoundary();
        this.createTitle();
    },

    createThumbnails: function() {
        const container = document.getElementById('comic-container');

        const comics = [
            { src: 'comic1.jpg', position: { x: -2, y: 0, z: -3 } },
            { src: 'comic2.jpg', position: { x: 0, y: 0, z: -3 } },
            { src: 'comic3.jpg', position: { x: 2, y: 0, z: -3 } }
        ];

        // Create thumbnails
        comics.forEach((comic) => {
            const thumbnail = document.createElement('a-image');
            thumbnail.setAttribute('src', comic.src);
            thumbnail.setAttribute('width', '1.5');
            thumbnail.setAttribute('height', '2');
            thumbnail.setAttribute('position', comic.position);
            container.appendChild(thumbnail);
        });
    },

    createBoundary: function() {
        const container = document.getElementById('comic-container');

        // Define the boundary (e.g., a frame around the posters)
        const boundary = document.createElement('a-entity');
        boundary.setAttribute('geometry', 'primitive: box; width: 5; height: 3; depth: 0.1');
        boundary.setAttribute('material', 'color: #000');
        boundary.setAttribute('position', '0 1.5 -3');

        container.appendChild(boundary);
    },

    createTitle: function() {
        const container = document.getElementById('comic-container');

        // Create a title
        const title = document.createElement('a-text');
        title.setAttribute('value', 'Virtual Posters');
        title.setAttribute('align', 'center');
        title.setAttribute('color', '#FFFFFF');
        title.setAttribute('position', '0 2 -3');

        container.appendChild(title);
    }
});
