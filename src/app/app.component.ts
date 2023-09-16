import { Component, OnInit } from '@angular/core';
import { News } from 'src/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'blog';
  currentNews: number = 0;

  news: News[] = [
    {
      img: '../assets/news-img0.jpg',
      title:
        'Papagaio de Pirata Eleito como Mascote Oficial de Time de Futebol',
      creator: 'Por: Esportes Today',
      text: 'Em uma decisão inusitada, um papagaio de pirata chamado Capitão Penas foi escolhido como a nova mascote do time de futebol local, trazendo diversão e animação para os torcedores durante os jogos.',
    },
    {
      img: '../assets/news-img1.jpg',
      title: 'Mulher com Cabelo Rosa Lança Marca de Cosméticos Inovadora',
      creator: 'Por: Beleza Vogue',
      text: "Uma mulher com cabelos rosa vibrantes, conhecida como a 'Rainha das Cores', lançou uma marca de cosméticos revolucionária que promete transformar a indústria da beleza com cores ousadas e produtos de alta qualidade.",
    },
    {
      img: '../assets/news-img2.jpg',
      title: 'Homem com Coelho na Cabeça Surpreende em Desfile de Moda',
      creator: 'Por: Fashion Trends',
      text: 'Um homem ousado e criativo deixou a platéia boquiaberta durante um desfile de moda ao usar uma cabeça de coelho como acessório. Sua ousadia e estilo únicos chamaram a atenção de todos no evento.',
    },
    {
      img: '../assets/news-img3.jpg',
      title: 'Pato Cientista Desenvolve Novo Método para Conservação Ambiental',
      creator: 'Por: Ciência Avançada',
      text: 'Um pato devidamente paramentado como cientista está fazendo ondas na comunidade científica com sua pesquisa inovadora. Ele recentemente desenvolveu um método inédito para a conservação ambiental que promete proteger ecossistemas preciosos.',
    },
  ];

  ngOnInit(): void {
    setInterval(() => this.loopNews(), 10000);
  }

  loopNews(): void {
    this.currentNews = this.currentNews < 3 ? this.currentNews + 1 : 0;
  }
}
