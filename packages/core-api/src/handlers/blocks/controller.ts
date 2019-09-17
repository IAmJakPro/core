import { app, Container, Contracts } from "@arkecosystem/core-kernel";
import Boom from "@hapi/boom";
import Hapi from "@hapi/hapi";

import { Controller } from "../shared/controller";

export class BlocksController extends Controller {
    public async index(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            // @ts-ignore
            const data = await request.server.methods.v2.blocks.index(request);

            return super.respondWithCache(data, h);
        } catch (error) {
            return Boom.badImplementation(error);
        }
    }

    public async first(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            return super.respondWithResource(
                // todo: inject from container
                app.get<Contracts.State.StateStore>(Container.Identifiers.StateStore).getGenesisBlock().data,
                "block",
                (request.query.transform as unknown) as boolean,
            );
        } catch (error) {
            return Boom.badImplementation(error);
        }
    }

    public async last(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            return super.respondWithResource(
                // todo: inject from container
                app.get<Contracts.Blockchain.Blockchain>(Container.Identifiers.BlockchainService).getLastBlock().data,
                "block",
                (request.query.transform as unknown) as boolean,
            );
        } catch (error) {
            return Boom.badImplementation(error);
        }
    }

    public async show(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            // @ts-ignore
            const data = await request.server.methods.v2.blocks.show(request);

            return super.respondWithCache(data, h);
        } catch (error) {
            return Boom.badImplementation(error);
        }
    }

    public async transactions(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            // @ts-ignore
            const data = await request.server.methods.v2.blocks.transactions(request);

            return super.respondWithCache(data, h);
        } catch (error) {
            return Boom.badImplementation(error);
        }
    }

    public async search(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            // @ts-ignore
            const data = await request.server.methods.v2.blocks.search(request);

            return super.respondWithCache(data, h);
        } catch (error) {
            return Boom.badImplementation(error);
        }
    }
}
