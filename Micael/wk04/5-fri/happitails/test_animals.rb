shelter[:clients] << Client.new('Johnnie', 2, 4, ['lil uzi', 'lil wayne', 'lil pump'].map { |pet| Animal.new(pet)})

shelter[:clients] << Client.new('Juan', 50, 2, ['bob', 'Bobbye', 'Bonobo'].map { |pet| Animal.new(pet)})

shelter[:pets] << Animal.new('Bullet', 12, 'male', 'chiuaua', ['ball','guns'])

shelter[:pets] << Animal.new('Arrow', 3, 'female', 'chiuaua', ['bow','sword'])