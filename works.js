fetch("works.csv")
    .then((response) => response.text())
    .then((data) => {
        const rows = data.trim().split("\n");
        const headers = rows[0].trim().split(",");
        const dataRows = rows.slice(1);

        const values = dataRows.map((row) => {
            const work = row.trim().split(",");
            const item = {};
            headers.forEach((header, index) => {
                item[header] = work[index];
            })
            return item;
        })

        const grid = document.querySelector("#works-grid");

        values.forEach((value) => {
            const card = document.createElement("li");
            card.classList.add("card");

            const link = document.createElement("a");
            link.href = value.link;

            const image = document.createElement("img");
            image.src = value.image;
            image.alt = value.title;

            const content = document.createElement("div");
            
            const title = document.createElement("h4");
            title.textContent = value.title;
            
            const description = document.createElement("p");
            description.textContent = value.description;

            content.appendChild(title);
            content.appendChild(description);

            link.appendChild(image);
            link.appendChild(content);

            card.appendChild(link);
            grid.appendChild(card);
        });
    });