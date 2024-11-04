function replaceIconWithImage(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files ? target.files[0] : null;
    const iconContainer = document.getElementById('imageIcon') as HTMLElement;

    if (file){
        const reader = new FileReader();
        reader.onload = function (e: ProgressEvent<FileReader>): void{
            iconContainer.innerHTML = '';

            const img = document.createElement('img');
            img.src = e.target?.result as string;
            iconContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

const save = document.getElementById('botao');

save?.addEventListener('click', () =>{
    const nome = document.getElementById('nome') as HTMLInputElement;
    const data = document.getElementById('data') as HTMLInputElement;
    const imageInput = document.getElementById('imageInput');

    type Nome = string;
    let nomes: Nome[] = JSON.parse(localStorage.getItem('nomes') as string) || [];
    localStorage.setItem('nomes', JSON.stringify(nomes));

    type Datas = string;
    let datas: Nome[] = JSON.parse(localStorage.getItem('datas') as string) || [];
    localStorage.setItem('datas', JSON.stringify(datas));

    const imageInput2 = document.getElementById('imageInput') as HTMLInputElement;

    imageInput2.addEventListener('change', (event: Event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (!file) {
            alert('Por favor, selecione uma imagem!');
            return;
        }

        const reader = new FileReader();

    reader.onload = function (e: ProgressEvent<FileReader>) {
        const images: string[] = JSON.parse(localStorage.getItem('images') as string) || []; 
        if (typeof e.target?.result === 'string') {
            images.push(e.target.result); 
            localStorage.setItem('images', JSON.stringify(images)); 
        }
    };

    reader.readAsDataURL(file); 
});

console.log('Dados salvos com sucesso!');


});