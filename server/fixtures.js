if (Contacts.find().count() === 0) {
  Contacts.insert({
    title: 'Facebook',
    content: 'https://www.facebook.com/profile.php?id=100001966281260',
    src: 'images/fb.png'
  });
  
  Contacts.insert({
    title: 'Vk',
    content: 'https://vk.com/id122460721',
    src: 'images/vk.png'
  });
  
  Contacts.insert({
	 title: 'Телефон',
	 content: '+380978615195',
   src: 'images/phone.png'
  });

  Contacts.insert({
    title: 'Електронна пошта',
    content: 'medjo21@gmail.com',
    src: 'images/gmail.png'
  })
} 