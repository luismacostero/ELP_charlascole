var datosFrases = [
  ['Mi hermana se ha echado novio y no me cae bien.','1','0','0','1'],
  ['Mi primo es un crack y ha hackeado facebook.','0','0','2','0'],
  ['"Has visto a esa chica, que es rara y se viste como un tío?"','0','1','0','1'],
  ['"Puedes alegrarte y ponerte triste a la vez cuando ves a una persona? Sí, y me ha pasado hoy."','1','0','1','0'],
  ['"Harto de inglés, creo que me voy a copiar en el examen…"','0','1','0','1'],
  ['"Este finde me voy a mi pueblo, así que no puedo quedar!"','1','1','0','0'],
  ['"He sacado un 6 en el examen, como se entere mi madre ufffff se lia"','0','2','0','0'],
  ['"Me he comprado el último iphone, mañana os lo enseño en clase chicos!"','0','1','1','0'],
  ['He quedado con Carlos dentro de dos horas y estoy de los nervios…','0','1','0','1'],
  ['"Buah chaval, cómo puede haber gente tan tonta? Me tienes hasta las narices, a ver si te enteras ya!"','0','1','0','1'],
  ['Me han comprado un ipod por mi cumple!!!!','0','2','0','0'],
  ['#EstamosALunes que ganas de que sea viernes yaa!! #Fiesta :)','1','0','1','0'],
  ['Quien se apunta a un #cine?','1','0','1','0'],
  ['Nosotros de fiesta (#foto)','0','1','1','0'],
  ['Cómo os puede caer bien ese empollón? Madre mía...','0','1','1','0'],
  ['Mira Sara dormida en clase (#foto)','0','0','1','1'],
  ['"Sabes que a Juan le gusta Laura, seguro que le dice que no."','1','1','0','0'],
  ['"Que asco de tio, dice que no estudia y saca un diez."','0','2','0','0'],
  ['Mi madre se ha creído que tengo un 8 en sociales y me deja ir este finde!!','0','2','0','0'],
  ['"Tú, no se lo digas a nadie, pero le he dicho a Pepe que a Laura le gusta otro… Ahora solo tengo que conseguir que me haga caso a mí jajajaja"','1','1','0','0'],
  ['Mi usuario del WoW es lokencio75 y la contraseña “nomehackeasniloco”','0','1','0','1'],
  ['"Han venido unos a clase a decirme que facebook es malo, bueno al menos pierdo clase."','0','2','0','0'],
  ['Esta tarde cuando mi madre se vaya a la compra te llamo.','0','2','0','0'],
  ['Este finde estoy solo en casa!!','1','1','0','0'],
  ['Y a mí qué me importa lo que me cuentan estos de la privacidad? Si es una tontería.','0','2','0','0'],
  ['Hoy me tengo que volver sola de la academia porque mis padres no están','1','1','0','0'],
  ['No me dejan llevarme la play a la playa… qué asco tío','0','1','0','1'],
  ['Sii! vacaciones de navidad! toda la familia al pueblo!','1','0','1','0'],
  ['"Juan acuerdate, hemos quedado a las seis, mi calle es Timanfaya número 40 piso 3A"','0','2','0','0'],
  ['Sabes que vuelvo a tener novia? Por fin!!! Ya es la cuarta!!!!','0','1','1','0'],
  ['Por qué no engañas a Marta? No me apetece que venga con nosotros esta tarde','0','1','0','1'],
  ['"Fuckencio quiere ser matemático, menudo friki."','0','1','0','1'],
  ['Keep calm and copia en los exámenes','1','0','1','0'],
  ['Ola k ase?','0','1','1','0'],
  ['Mañana cuando se vaya mi madre me bajo al parque chicos!','1','1','0','0'],
  ['Mi padre se piensa que puede obligarme a estudiar… Voy a hacer lo que me de la gana','1','0','0','1'],
  ['Quedamos en la puerta del cole para ir al concierto. Sin padres!!!','0','2','0','0'],
  ['"Mi whatsapp es 612344321, me avisas y bajo!"','0','0','1','1'],
  ['Dame tu whatsapp pa pasarte esta foto.','1','0','1','0'],
  ['Queréis que os meta a todos en un grupo de whatsapp? así conocemos a más gente antes de la fiesta!!!','0','2','0','0'],
  ['Si pones tu whatsapp en esta página (#link) tienes iconos nuevos!','1','0','1','0'],
  ['Mándame las fotos de esta tarde porfa!','0','2','0','0'],
  ['"Mira qué bien sale Laura en esta foto, es guapísim@"','0','1','0','1'],
  ['Juan si te chivas de lo de ayer cuelgo en facebook esta foto (#foto)','1','1','0','0'],
  ['"El Felipe no tiene Instagram, voy a subir la foto que no le gusta ahí, así no se enfada."','0','1','1','0'],
  ['Mira lo que le hicimos al coche del de mates!','0','2','0','0'],
  ['El otro día en el parque (#foto)','0','1','1','0'],
  ['Y así paso yo todas las tardes (#foto)','0','1','1','0'],
  ['Vota en este (#link) la chica más guapa de clase','1','1','0','0']
];


$(document).ready(function() {
  $('#tabla_frases').dataTable({
    "data": datosFrases,
    "columns": [
      {"title":"Frase",
      "className":"first_column"},
      {"title":"Twitter"},
      {"title":"Whatsapp"},
      {"title":"Instagram"},
      {"title":"Ninguna"}
    ]
  });
});
      
