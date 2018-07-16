class Animal

  def initialize (pet_name = 'nameless', pet_age = 0, pet_gender = 'unknown', pet_species = 'unknown', pet_toys = [])
    @name = pet_name
    @age = pet_age
    @gender = pet_gender
    @species = pet_species
    @toys = pet_toys
  end

  def get_name
    @name
  end


end