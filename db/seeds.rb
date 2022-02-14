Book.create(title: 'The Way of Kings')
Book.create(title: 'Words of Radiance')
Book.create(title: 'Oathbringer')
Book.create(title: 'Rhythm of War')

Chapter.create(book_id: 1, section: 'Prologue', title: 'To Kill', year: 1167)
Chapter.create(book_id: 1, section: 'Chapter 1', title: 'Stormblessed', year: 1172)
Chapter.create(book_id: 1, section: 'Chapter 2', title: 'Honor is Dead', year: 1173)
Chapter.create(book_id: 1, section: 'Chapter 3', title: 'City of Bells', year: 1173)
Chapter.create(book_id: 1, section: 'Chapter 4', title: 'The Shattered Plains', year: 1173)
Chapter.create(book_id: 2, section: 'Prologue', title: 'To Question', year: 1167)
Chapter.create(book_id: 2, section: 'Chapter 1', title: 'Santhid', year: 1173)
Chapter.create(book_id: 2, section: 'Chapter 2', title: 'Bridge Four', year: 1173)
Chapter.create(book_id: 2, section: 'Chapter 3', title: 'Pattern', year: 1173)
Chapter.create(book_id: 2, section: 'Chapter 4', title: 'Taker of Secrets', year: 1173)
Chapter.create(book_id: 3, section: 'Prologue', title: 'To Weep', year: 1167)
Chapter.create(book_id: 3, section: 'Chapter 1', title: 'Broken and Divided', year: 1174)
Chapter.create(book_id: 3, section: 'Chapter 2', title: 'One Problem Solved', year: 1174)
Chapter.create(book_id: 3, section: 'Chapter 3', title: 'Momentum', year: 1140)
Chapter.create(book_id: 3, section: 'Chapter 4', title: 'Oaths', year: 1174)
Chapter.create(book_id: 4, section: 'Prologue', title: 'To Pretend', year: 1167)
Chapter.create(book_id: 4, section: 'Chapter 1', title: 'Calluses', year: 1175)
Chapter.create(book_id: 4, section: 'Chapter 2', title: 'Severed Cords', year: 1175)
Chapter.create(book_id: 4, section: 'Chapter 3', title: 'The Fourth Bridge', year: 1175)
Chapter.create(book_id: 4, section: 'Chapter 4', title: 'Architects of the Future', year: 1175)

Character.create(name: 'Szeth', color: 'white')
Character.create(name: 'Kaladin', color: '')
Character.create(name: 'Shallan', color: '')
Character.create(name: 'Jasnah', color: '')
Character.create(name: 'Dalinar', color: '')
Character.create(name: 'Eshonai', color: '')
Character.create(name: 'Adolin', color: '')
Character.create(name: 'Navani', color: '')
Character.create(name: 'Lirin', color: '')

Location.create(name: 'Kholinar', x_coordinates: 93, y_coordinates: 1, z_coordinates: -5)
Location.create(name: 'Battle Outside of Hearthstone', x_coordinates: 81, y_coordinates: 1, z_coordinates: -28)
Location.create(name: 'Unclaimed Hills', x_coordinates: 81, y_coordinates: 1, z_coordinates: -28)
Location.create(name: 'Kharbranth', x_coordinates: 25, y_coordinates: .5, z_coordinates: 51)
Location.create(name: 'Shattered Plains', x_coordinates: 104, y_coordinates: 7, z_coordinates: 45)
Location.create(name: "Longbrow's Straits", x_coordinates: 60, y_coordinates: -.5, z_coordinates: 73)
Location.create(name: " Leaving Longbrow's Straits", x_coordinates: 70, y_coordinates: -.5, z_coordinates: 83)
Location.create(name: 'Urithiru', x_coordinates: -6, y_coordinates: 11, z_coordinates: 22)
Location.create(name: 'Hearthstone', x_coordinates: 90, y_coordinates: 1, z_coordinates: -30)

ChapterLocationCharacter.create(character_id: 1, chapter_id: 1, location_id: 1, summary: 'Szeth is sent on a mission to kill the king of Kholinar.')
ChapterLocationCharacter.create(character_id: 2, chapter_id: 2, location_id: 2, summary: 'A new recruit finds himself assigned to a troop led by commander Kaladin Stormblessed.')
ChapterLocationCharacter.create(character_id: 2, chapter_id: 3, location_id: 3, summary: 'Kaladin, now a slave, is being transported through the Unclaimed Hills to an unknown destination.')
ChapterLocationCharacter.create(character_id: 3, chapter_id: 4, location_id: 4, summary: 'Shallan has just docked at Kharbranth to become the ward of Jasnah Kholin.')
ChapterLocationCharacter.create(character_id: 2, chapter_id: 5, location_id: 5, summary: 'Kaladin learns that he is to be sold off to the war camps at the Shatterd Plains.')
ChapterLocationCharacter.create(character_id: 4, chapter_id: 6, location_id: 1, summary: 'Jasnah meets with an assassin under her employ the night her father is killed.')
ChapterLocationCharacter.create(character_id: 3, chapter_id: 7, location_id: 6, summary: "Shallan is sailing aboard the Wind's Pleasure on it's way to the Shattered Plains.")
ChapterLocationCharacter.create(character_id: 2, chapter_id: 8, location_id: 5, summary: "Kaladin begins his new role as the head of Prince Dalinar's security team.")
ChapterLocationCharacter.create(character_id: 3, chapter_id: 9, location_id: 7, summary: "Shallan discusses with Jasnah about the strange creature only she can see.")
ChapterLocationCharacter.create(character_id: 5, chapter_id: 10, location_id: 5, summary: "Dalinar is experiencing another vision and is relaying information to Queen Novani.")
ChapterLocationCharacter.create(character_id: 6, chapter_id: 11, location_id: 1, summary: "Eshonai arrives at Kholinar to celebrate the treaty with the humans.")
ChapterLocationCharacter.create(character_id: 5, chapter_id: 12, location_id: 8, summary: "Dalinar experiences a vision from the Stormfather of a broken and defeated Kholinar.")
ChapterLocationCharacter.create(character_id: 7, chapter_id: 13, location_id: 8, summary: "After murdering Sadeas in cold blood, Adolin must deal with the discovery of the body.")
ChapterLocationCharacter.create(character_id: 5, chapter_id: 14, location_id: 8, summary: "Dalinar leads an assault as the Kholin brothers begin their conquest of Alethkar.")
ChapterLocationCharacter.create(character_id: 5, chapter_id: 14, location_id: 8, summary: "Dalinar leads an assault as the Kholin brothers begin their conquest of Alethkar.")
ChapterLocationCharacter.create(character_id: 5, chapter_id: 15, location_id: 8, summary: "Dalinar prepares for his wedding day with his brother's widow: Novani Kholin.")
ChapterLocationCharacter.create(character_id: 5, chapter_id: 16, location_id: 1, summary: "Navani is busy preparing the feast for the arrival of the Parshendi on the night of their celebratory treaty.")
ChapterLocationCharacter.create(character_id: 5, chapter_id: 16, location_id: 1, summary: "Navani is busy preparing the feast for the arrival of the Parshendi on the night of their celebratory treaty.")
ChapterLocationCharacter.create(character_id: 9, chapter_id: 17, location_id: 9, summary: "Lirin continues his occupation of helping those in need when a familiar stranger shows up in Hearthstone.")
ChapterLocationCharacter.create(character_id: 2, chapter_id: 18, location_id: 9, summary: "Kaladin has arrived in Hearthstone to liberate the town from the hands of the Parshendi.")
ChapterLocationCharacter.create(character_id: 9, chapter_id: 19, location_id: 9, summary: "Navani arrives in Hearthstone in the newly crafted airship, The Fourth Bridge, and prepares to evacuate the denizens.")
ChapterLocationCharacter.create(character_id: 3, chapter_id: 20, location_id: 5, summary: "Shallan has been captured by associates of the Ghostbloods, all according to her plan.")