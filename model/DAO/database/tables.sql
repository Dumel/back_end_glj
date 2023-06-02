------------ TABELAS -----------------

-- tabela produtos -- 
create table tbl_produtos (
		id int not null primary key auto_increment,
        nome varchar(150) not null,
        valor float not null,
        foto varchar(500),
        descricao text,
        
        unique index(id)
);

-- tabela materia -- 
create table tbl_materia (
		id int not null primary key auto_increment,
        nome varchar(100) not null,
        
        unique index(id)
);

-- tabela conteudo -- 
create table tbl_conteudo(
		id int not null primary key auto_increment,
        nome varchar(45) not null,
        id_materia int not  null,
        
		#Cria um nome para representar a FK
        constraint FK_materia_conteudo
        
        #Indica quem será o atributo desta tabela que será um FK
        foreign key (id_materia)
        
        #Indica de onde virá a PK para virara a FK
        references tbl_materia(id),
        
        unique index(id)
);

alter table tbl_conteudo
	modify column nome varchar(100) not null;



------------  Inserts ------------------

-- insert tbl_produtos --
insert into tbl_produtos(
                        nome,
                        valor,
                        foto,
                        descricao
						)
                        values
                        (
                        'Notebook Dell Inspiron 15 3000',
                        '3999.99',
                        'notebook-dell-inspiron-15-3000.png',
                        'Notebook com processador Intel Core i5, 8GB de RAM e 256GB de SSD'
                        ),
                        (
                        'Monitor Samsung LED 23.8 polegadas',
                        '799.99',
                        'monitor-samsung-led-23.8.png',
                        'Monitor LED com resolução Full HD e tempo de resposta de 5ms'
                        ),
                        (
                        'Mouse Gamer Logitech G Pro',
                        '299.99',
                        'mouse-gamer-logitech-g-pro.png',
                        'Mouse com sensor HERO 25K, 6 botões programáveis e 16000 DPI'
                        ),
                        (
                        'Teclado Mecânico Redragon Kumara',
                        '219.99',
                        'teclado-mecanico-redragon-kumara.png',
                        'Teclado mecânico com switches Outemu Blue e iluminação em LED'
                        ),
                        (
                        'Smartphone Samsung Galaxy S21',
                        '2800.99',
                        'smartphone-samsung-galaxy-s21.png',
                        'Smartphone com tela de 6.2 polegadas, processador Exynos 2100 e câmera de 64 MP'
                        ),
                        (
                        'Tablet Apple iPad Pro',
                        '8499.99',
                        'tablet-apple-ipad-pro.png',
                        'Tablet com tela de 11 polegadas, processador A12Z Bionic e câmera de 12 MP'
                        ),
                        (
                        'Caixa de Som JBL Flip 5',
                        '499.99',
                        'caixa-de-som-jbl-flip-5.png',
                        'Caixa de som portátil com Bluetooth, resistente à água e bateria com duração de até 12 horas'
                        ),
                        (
                        'Fone de Ouvido Bluetooth JBL Tune 500BT',
                        '299.99',
                        'fone-de-ouvido-bluetooth-jbl-tune-500bt.png',
                        'Fone de ouvido com conectividade Bluetooth, bateria com duração de até 16 horas e microfone integrado'
                        ),
                        (
                        'Smartwatch Samsung Galaxy Watch 3',
                        '2799.99',
                        'smartwatch-samsung-galaxy-watch-3.png',
                        'Smartwatch com tela de 1.4 polegadas, GPS integrado e bateria com duração de até 56 horas'
                        ),
                        (
                        'Câmera Sony Alpha a7 III',
                        '12999.99',
                        'camera-sony-alpha-a7-iii.png',
                        'Câmera mirrorless com sensor full-frame de 24.2 MP, estabilização de imagem de 5 eixos e gravação de vídeo em 4K'
                        ),
                        (
                        'Notebook GLJ',
                        '2600.00',
                        'https://1.bp.blogspot.com/-qChr0SCNz4s/XZlVd5Cf4iI/AAAAAAAAfs4/rFKG4oQaXOARRm8MD0ZW-dLELTfik18bACLcBGAsYHQ/s1600/lenovo-ideapad-330s-i7-8550u-8gb-1tb-windows-10-81jm0003br-D_NQ_NP_622010-MLB31685678513_082019-F.jpg',
                        'Notebook de tecnologia avançada, desenvolvida pela empresa GLJ'
                        ),
                        (
                        'Tablet GLJ',
                        '2200.00',
                        'https://w7.pngwing.com/pngs/259/279/png-transparent-turned-on-tablet-computer-sony-xperia-z4-tablet-sony-xperia-tablet-z-sony-xperia-z2-tablet-sony-xperia-tablet-s-tablet-electronics-gadget-computer-thumbnail.png',
                        'Tablet de tecnologia avançada, desenvolvido pela empresa GLJ'
                        ),
                        (
                        'Celular GLJ',
                        '1700.00',
                        'https://w7.pngwing.com/pngs/448/953/png-transparent-smartphone-feature-phone-mobile-phones-fingerprint-vivo-smartphone-gadget-electronics-mobile-phone-thumbnail.png',
                        'Celular de tecnologia avançada'
                        ),
                        (
                        'PC GLJ',
                        '4400.00',
                        'https://w7.pngwing.com/pngs/176/1000/png-transparent-laptop-personal-computer-computer-hardware-desktop-computers-computer-desktop-pc-computer-network-electronics-computer-thumbnail.png',
                        'Pc de tecnologia avançada, desenvolvido pela emprea GLJ'
                        ),
                        (
                        'Gabinete GLJ',
                        '2000.00',
                        'https://w7.pngwing.com/pngs/819/228/png-transparent-computer-cases-housings-central-processing-unit-desktop-computers-cpu-s-computer-electronic-device-computer-hardware-thumbnail.png',
                        'Gabinete desenvolvido pela empresa GLJ'
                        );
                        
-- insert tbl_materia --
insert into tbl_materia(
						nome
						)
                        values
                        (
                        'Artes'
                        ),
                        (
                        'Biologia'
                        ),
                        (
                        'Educação física'
                        ),
                        (
                        'Física'
                        ),
                        (
                        'Filosofia e sociologia'
                        ),
                        (
                        'Geografia'
                        ),
                        (
                        'História'
                        ),
                        (
                        'Inglês'
                        ),
                        (
                        'Interpretação de texto'
                        ),
                        (
                        'Português'
                        ),
                        (
                        'Matemática'
                        ),
                        (
                        'Química'
                        );

-- insert tbl_conteudo --
insert into tbl_conteudo(
                        nome,
                        id_materia
						)
                        values
                        (
                        'Arte contemporânea',
                        1
                        ),
                        (
                        'Arte nos séculos XV e XVI',
                        1
                        ),
                        (
                        'Elementos básicos das artes plásticas',
                        1
                        ),
                        (
                        'Elementos básicos de música',
                        1
                        ),
                        (
                        'Música no século XX',
                        1
                        ),
                        (
                        'Vanguardas europeias',
                        1
                        ),
                        (
                        'Interpretação de poemas',
                        1
                        ),
                        (
                        'Sistema imunitário',
                        2
                        ),
                        (
                        'Ecossistema',
                        2
                        ),
                        (
                        'Fundamentos da ecologia',
                        2
                        ),
                        (
                        'DNA e RNA',
                        2
                        ),
                        (
                        'Genética',
                        2
                        ),
                        (
                        'Anatomia e fisiologia',
                        2
                        ),
                        (
                        'Vírus',
                        2
                        ),
                        (
                        'Esporte e espetáculo',
                        3
                        ),
                        (
                        'Influência da mídia no corpo',
                        3
                        ),
                        (
                        'Esportes adaptados',
                        3
                        ),
                        (
                        'Cuidados com a saúde',
                        3
                        ),
                        (
                        'Acústica',
                        4
                        ),
                        (
                        'Energia, trabalho e potência',
                        4
                        ),
                        (
                        'Resistores',
                        4
                        ),
                        (
                        'Calorimetria',
                        4
                        ),
                        (
                        'Impulso, quantidade de movimento e análise dimensional',
                        4
                        ),
                        (
                        'Cinemática',
                        4
                        ),
                        (
                        'Dinâmica',
                        4
                        ),
                        (
                        'Aristóteles e escola helenística',
                        5
                        ),
                        (
                        'Racionalismo moderno',
                        5
                        ),
                        (
                        'Escola sofista, Sócrates e Platão',
                        5
                        ),
                        (
                        'Filosofia contemporânea',
                        5
                        ),
                        (
                        'Escola de Frankfurt',
                        5
                        ),
                        (
                        'Papel do estado e relações de poder',
                        5
                        ),
                        (
                        'Capitalismo',
                        5
                        ),
                        (
                        'Erosão, sedimentação, desgaste do solo',
                        6
                        ),
                        (
                        'Fontes alternativas de energia',
                        6
                        ),
                        (
                        'Inovações tecnológicas no campo',
                        6
                        ),
                        (
                        'Problemas urbanos',
                        6
                        ),
                        (
                        'Impactos ambientais',
                        6
                        ),
                        (
                        'Produção agropecuária',
                        6
                        ),
                        (
                        'População economicamente ativa',
                        6
                        ),
                        (
                        'Brasil colonial',
                        7
                        ),
                        (
                        'Primeira república',
                        7
                        ),
                        (
                        '1° e 2° governo vargas',
                        7
                        ),
                        (
                        'Brasil oligárquico',
                        7
                        ),
                        (
                        'Ditadura civil militar no brasil',
                        7
                        ),
                        (
                        'Guerra fria',
                        7
                        ),
                        (
                        'Escravidão no Brasil império',
                        7
                        ),
                        (
                        'Utilizar a plataforma DUOLINGO',
                        8
                        ),
                        (
                        'Textualidade',
                        9
                        ),
                        (
                        'Tipos de texto',
                        9
                        ),
                        (
                        'Análise da pessoa, do espaço e do tempo',
                        9
                        ),
                        (
                        'Funções da linguagem',
                        9
                        ),
                        (
                        'Narratividade',
                        9
                        ),
                        (
                        'Textos informativos',
                        9
                        ),
                        (
                        'Textos jornalísticos',
                        9
                        ),
                        (
                        'Tendências contemporâneas',
                        10
                        ),
                        (
                        'Estrutura e formação das palavras',
                        10
                        ),
                        (
                        'Pontuação',
                        10
                        ),
                        (
                        'Classe de palavras',
                        10
                        ),
                        (
                        'Verbo',
                        10
                        ),
                        (
                        'Função e impacto de novas mídias',
                        10
                        ),
                        (
                        'Variação linguística',
                        10
                        ),
                        (
                        'Problemas de 1° e 2° graus',
                        11
                        ),
                        (
                        'Grandezas proporcionais e médias algébricas',
                        11
                        ),
                        (
                        'Porcentagem e matemática financeira',
                        11
                        ),
                        (
                        'Funções',
                        11
                        ),
                        (
                        'Noções básicas de estatística',
                        11
                        ),
                        (
                        'Gráficos e tabelas',
                        11
                        ),
                        (
                        'Geometria plana',
                        11
                        ),
                        (
                        'Ligações químicas, polaridade e forças',
                        12
                        ),
                        (
                        'Reações orgânicas',
                        12
                        ),
                        (
                        'Compostos orgânicos',
                        12
                        ),
                        (
                        'Eletroquímica',
                        12
                        ),
                        (
                        'Leis ponderais e estequiometria',
                        12
                        ),
                        (
                        'Química ambiental',
                        12
                        ),
                        (
                        'Soluções',
                        12
                        );

--------------- Scripts -------------------
-- script para buscar todos os produtos
select * from tbl_produtos;
-- script para buscar todas as materias
select * from tbl_materia;
-- script para buscar todos os conteudos 
select * from tbl_conteudo;
-- script para buscar o conteudo pela materia 
select * from tbl_conteudo where id_materia = 2;



