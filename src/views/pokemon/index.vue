<template>
  <section class="content" :class="typePrimaryColor">
    <a class="back" @click="$router.go(-1)">
      <font-awesome-icon
      icon="fa-chevron-left"
      />
    </a>
    <div class="content__wrapper">
      <div>
        <div class="content__intro">
          <span class="content__intro__title">{{ pokemon.name }}</span>
          <span class="content__intro__subtitle"> #{{ id }}</span>
          <img class="content__intro__image" :src="imageURL" :alt="pokemon.name" />
        </div>
        <div class="content__infos">
          <div class="stats">
            <span> <strong>Base experience:</strong> {{ baseExperience }} </span>
            <span> <strong>Abilities:</strong> {{ abilities }} </span>
            <span class="stats__types">
              <strong>Types:</strong>
              <type-poke
                v-for="({ type }, index) in pokemon.types"
                class="type"
                :class="pokemonsColors[type.name].name"
                :key="index"
                :type="type.name"
              />
            </span>
            <span> <strong>Moves qtd.:</strong> {{ movesLength }} </span>
            <span> <strong>Height:</strong> {{ height }} m</span>
            <span> <strong>Weight:</strong> {{ weight }} Kg</span>
          </div>
          <div class="stats">
            <span v-for="stat in stats" :key="stat.name">
              <strong>{{ stat.name }}:</strong> {{ stat.base_stat }}
            </span>
          </div>
        </div>
      </div>
      <div class="content__location">alo</div>
    </div>
  </section>
</template>

<script>
import { getPokemonSearch, getPokemonLocation } from "@/services/index.js";
import { pokemonsColors } from "@/utils/pokemon-colors.js";
import { TypePoke } from "@/components";

export default {
  name: "PokemonDetails",
  components: { TypePoke },
  data() {
    return {
      pokemonsColors,
      pokemon: {},
      location: null,
    };
  },
  computed: {
    typePrimaryColor() {
      return pokemonsColors[this.fisrtname]?.card;
    },
    fisrtname() {
      return this.pokemon.types?.[0].type.name;
    },
    imageURL() {
      return this.pokemon.sprites?.other["official-artwork"].front_default;
    },
    id() {
      return `${this.pokemon.id}`.padStart(3, "0");
    },
    abilities() {
      return this.pokemon?.abilities
        ?.map(({ ability }) => ability.name)
        .join(", ");
    },
    weight() {
      return this.pokemon.weight / 10;
    },
    height() {
      return this.pokemon.height / 10;
    },
    types() {
      return this.pokemon?.types?.map(({ type }) => type.name).join(", ");
    },
    movesLength() {
      return this.pokemon?.moves?.length;
    },
    baseExperience() {
      return this.pokemon?.base_experience;
    },
    stats() {
      return this.pokemon?.stats?.map(({ stat, base_stat }) => {
        return {
          base_stat,
          name: stat.name.charAt(0).toUpperCase() + stat.name.slice(1),
        };
      });
    },
  },
  async mounted() {
    this.pokemon =
      (await getPokemonSearch(
        `https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`
      )) || [];

    this.location = await getPokemonLocation(this.pokemon.location_area_encounters);
    console.log(this.location);
  },
};
</script>

<style lang="scss" scoped>

.content {
  height: 100%;
  width: 912px;
  border: 8px solid #333333;
  border-top: none;
  display: flex;
  padding: 16px;
  flex-direction: column;

  .content__wrapper {
    display: flex;
    gap: 120px;
  }
  
  .back {
    cursor: pointer;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 2px solid black;
    padding: 2px;
  }

  &__intro {
    margin-top: 16px;
    display: flex;
    flex-direction: column;

    &__title {
      font-size: 40px;
      font-weight: bold;
      color: #333;
    }

    &__subtitle {
      font-size: 16px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.4);
    }

    &__image {
      min-height: 200px;
      min-width: 200px;
      height: 350px;
      width: 350px;
    }
  }

  &__infos {
    display: flex;
    align-items: flex-end;
    margin-top: 16px;

    .stats {
      display: flex;
      flex-direction: column;
      padding-right: 32px;

      span {
        margin-bottom: 8px;
      }

      &__types {
        display: flex;

        .type {
          margin: 0px 4px;
        }
      }
    }
  }

  &__location {
    margin-top: 24px;
  }
}
</style>