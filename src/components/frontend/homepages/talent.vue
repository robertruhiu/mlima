<template>
    <a-layout>


        <!---Input--->
        <a-input v-model="ricerca"
                 @keyup="updateData();"
                 label="Cerca" placeholder="Basic usage"/>
        <a-popover title="Title" trigger="click">
    <template slot="content">
      <a-card class="filtri" title="Filters" v-model="filtro.menu">
                <p>Catergories</p>
            </a-card>
    </template>
    <a-button type="primary">Click me</a-button>
  </a-popover>

        <!-- Filters -->

        <v-menu
                v-model="filtro.menu"
                :close-on-content-click="false"
                :nudge-width="200"
                left
        >

            <a-button slot="activator" type="primary" shape="circle" icon="search"></a-button>
            <a-card class="filtri" title="Filters">
                <p>Catergories</p>
            </a-card>

            <a-card class="filtri">
                <a-card-title class="subheading">Filtri</a-card-title>


                <v-card-text>
                    <!-- Categorie -->
                    <v-list-tile-content>
                        <v-list-tile-title>Categorie</v-list-tile-title>
                        <v-list-tile-action>
                            <v-item-group multiple v-model="filtro.filtri.categorie">
                                <v-item>
                                    <v-chip
                                            slot-scope="{
                          active,
                          toggle
                        }"
                                            :selected="active"
                                            @click="toggle"
                                            :color="active ? 'primary' : ''"
                                            :text-color="active ? 'white' : ''"
                                    >
                                        Quadro
                                    </v-chip>
                                </v-item>

                            </v-item-group>
                        </v-list-tile-action>
                    </v-list-tile-content>


                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="primary" flat @click="saveFilters(true);"
                    >Cancella
                    </v-btn
                    >
                    <v-btn color="primary" @click="saveFilters(false);">Salva</v-btn>
                </v-card-actions>
            </a-card>
        </v-menu>


        <!-- LIST -->
        <v-data-iterator
                :items="posts"
                :rows-per-page-items="rowsPerPageItems"
                :pagination.sync="pagination"
                content-tag="v-layout"
                row
                wrap
        >
            <v-expansion-panel slot="item" slot-scope="props" xs12>
                <v-expansion-panel-content>
                    <div slot="header">
                        <v-layout align-center justify-start fill-height>
                            <div class="margin-rx-10">
                                <v-icon>{{ icons[props.item.tipo] }}</v-icon>
                            </div>
                            <v-flex> {{ props.item.materiale }}</v-flex>
                        </v-layout>
                    </div>
                    <v-card>
                        <v-card-text primary-title>
                            <v-flex>
                                <v-layout justify-center align-content-center>
                                    <v-flex><b>Codice:</b> {{ props.item.codice }}</v-flex>
                                    <v-flex><b>Tipo:</b> {{ tipi[props.item.tipo] }}</v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex>
                                <v-layout justify-center align-content-center>
                                    <v-flex><b>Lunghezza:</b> {{ props.item.y }}mm</v-flex>
                                    <v-flex v-if="props.item.tipo != 1">
                                        <b>Larghezza:</b> {{ props.item.x }}mm
                                    </v-flex
                                    >
                                    <v-flex v-if="props.item.tipo != 1">
                                        <b>Altezza:</b> {{ props.item.z }}mm
                                    </v-flex
                                    >
                                    <v-flex v-else><b>Diametro:</b> {{ props.item.x }}mm</v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex v-if="openDdt(props.item, 'posizione')">
                                <v-layout justify-center align-content-center>
                                    <v-flex v-if="props.item.posizione">
                                        <b>Posizione:</b> {{ props.item.posizione }}
                                    </v-flex>
                                    <v-flex v-if="props.item.colata">
                                        <b>Colata:</b> {{ props.item.colata }}
                                    </v-flex>
                                    <v-flex v-if="props.item.fornitore">
                                        <b>Fornitore:</b> {{ props.item.fornitore }}
                                    </v-flex>
                                </v-layout>
                            </v-flex>

                            <v-flex xs6 v-if="props.item.descrizione">
                                <b>Descrizione</b></v-flex
                            >
                            <v-flex xs12 v-if="props.item.descrizione">
                                {{ props.item.descrizione }}
                            </v-flex
                            >
                            <v-flex xs12 v-if="openDdt(props.item.ddt, 'ddt')"
                            >
                                <v-divider></v-divider
                                >
                            </v-flex>
                            <v-flex xs12 v-if="openDdt(props.item.ddt, 'ddt')"
                            ><h4>DDT</h4></v-flex
                            >
                            <v-flex v-if="openDdt(props.item.ddt, 'ddt')">
                                <v-layout justify-center align-content-center>
                                    <v-flex v-if="props.item.ddt.numero">
                                        <b>Numero:</b> {{ props.item.ddt.numero }}
                                    </v-flex>
                                    <v-flex v-if="props.item.ddt.data">
                                        <b>Data:</b> {{ formattedDate(props.item.ddt.data) }}
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn flat color="primary">Modifica</v-btn>
                        </v-card-actions>
                        <v-divider></v-divider>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-data-iterator>
    </a-layout>
</template>

<script slot-scope="true">

    import moment from 'moment';


    export default {
        name: 'talent',
        props: {
            value: {
                type: Array,
                default: function () {
                    return [];
                }
            }
        },
        data() {
            return {
                ricerca: '',
                updating: false,
                icons: ['stop', 'fiber_manual_record', 'view_compact'],
                tipi: ['Quadro', 'Tondo', 'Altro'],
                filtro: {
                    menu: false,
                    filtri: {
                        categorie: [0, 1, 2],
                        ddt: '',
                        lunghezza: [0, 12000]
                    }
                },
                rowsPerPageItems: [10, 20, 40, 80],
                pagination: {
                    rowsPerPage: 10
                },
                posts: this.value
            };
        },
        methods: {
            openDdt: function (data, parameter) {
                switch (parameter) {
                    case 'posizione':
                        return !(!data.posizione && !data.colata && !data.fornitore);
                    case 'ddt':
                        return !(!data.numero && !data.data);
                    default:
                        return true;
                }
            },
            formattedDate(date) {
                return date ? moment(date).format('DD/MM/YYYY') : '';
            },
            saveFilters(elimina) {
                try {
                    if (elimina)
                        this.filtro.filtri = {
                            categorie: [0, 1, 2],
                            ddt: '',
                            lunghezza: [0, 12000]
                        };
                    this.filtro.menu = false;
                    this.updateData(this.filtro.filtri);
                } catch (err) {
                    console.log(`ERRORE!: ${err}`);
                }
            },
            async updateData() {
                this.updating = true;
                var posts = this.value;

                if (this.filtro.filtri) {
                    posts = posts.filter(({tipo, ddt, y}) => {
                        try {
                            var condizioni = [];
                            condizioni.push(this.filtro.filtri.categorie.includes(tipo));
                            condizioni.push(
                                y >= this.filtro.filtri.lunghezza[0] &&
                                y <= this.filtro.filtri.lunghezza[1]
                            );
                            if (this.filtro.filtri.ddt !== '')
                                condizioni.push(
                                    ddt.numero
                                        .toString(10)
                                        .toLowerCase()
                                        .includes(this.filtro.filtri.ddt)
                                );
                            return condizioni.every(Boolean);
                        } catch (err) {
                            //console.log(`ERRORE: ${err}`);
                        }
                    });
                }

                if (this.ricerca !== '') {
                    const term = this.ricerca.toLowerCase();

                    var p = posts.filter(
                        ({codice, materiale}) =>
                            codice.toLowerCase().includes(term) ||
                            materiale.toLowerCase().includes(term)
                    );
                    posts = p;
                }

                //FINE RICHIESTA
                this.posts = posts;
                this.updating = false;
            }
        }
    };
</script>

<style>
    .toolbar {
        color: white !important;
    }

    .margin-rx-10 {
        margin-right: 10px;
    }

    .filtri .subheading {
        padding: 10px 16px !important;
    }

    .filtri .v-list__tile__content {
        margin-bottom: 10px;
    }

    .filtri .v-list__tile__action {
        width: 98%;
    }

    .filtri {
        max-width: 400px;
    }
</style>
