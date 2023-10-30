import { getRepository } from "typeorm";
import { Food } from "../../models/Food";
import { Factory, Seeder } from "typeorm-seeding";

export class foodSeed implements Seeder {


    public async run(factory: Factory): Promise<void> {
        const foods = [
            {
                name: "Pizza Margherita",
                image: "pizza-margherita.jpg",
                description: "A tradicional pizza Margherita é coberta com molho de tomate, muçarela, manjericão fresco e azeite de oliva.",
                price: 12.99,
            },
            {
                name: "Sushi Misto",
                image: "sushi-misto.jpg",
                description: "Um prato de sushi variado com nigiri, sashimi e rolos de arroz recheados com ingredientes frescos.",
                price: 18.99,
            },
            {
                name: "Lasanha",
                image: "lasanha.jpg",
                description: "Uma deliciosa lasanha com carne moída, molho de tomate e queijo derretido.",
                price: 14.99,
            },
            {
                name: "Sopa de Frango",
                image: "sopa-frango.jpg",
                description: "Uma sopa de frango caseira com legumes frescos e macarrão.",
                price: 8.99,
            },
            {
                name: "Salada Caesar",
                image: "salada-caesar.jpg",
                description: "Uma salada Caesar clássica com alface, croutons, parmesão e molho Caesar.",
                price: 9.49,
            },
            {
                name: "Tacos de Peixe",
                image: "tacos-peixe.jpg",
                description: "Tacos de peixe fresco com repolho, molho de coentro e abacate.",
                price: 12.99,
            },
        ];
        for (const food of foods) {
            await factory(Food)().create(food);
        }
    }


    public async down(): Promise<void> {
        // Implemente o método "down" se for necessário reverter a inserção de dados.
    }
}
