/*
  Author: Pedro Flores
  Date: 30/10/2022
  Description: Projeto para Dio.me para criar uma classe de heróis.
*/

class Hero {
  vocations = ['Guerreiro', 'Mago', 'Monge', 'Ninja'];

  constructor(name, age, vocation) {
    if (!this.vocations.includes(vocation)) {
      return console.log('Erro ao criar herói: Vocação inválida');
    }
    this.name = name;
    this.age = age;
    this.vocation = vocation;
    this.attackType = this.getAttack();
  }

  getAttack() {
    switch (this.vocation) {
      case this.vocations[0]:
        return 'espada';
      case this.vocations[1]:
        return 'magia';
      case this.vocations[2]:
        return 'artes marciais';
      case this.vocations[3]:
        return 'shuriken';
      default:
        return false;
    }
  }

  attack() {
    if (!this.attackType) {
      return console.log('Vocação inválida');
    }

    console.log(`O ${this.vocation} atacou usando ${this.attackType}`);
  }
}

const hero = new Hero('João', 25, 'Monge');
hero.attack();
