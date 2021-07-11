import PairRepositoryInterface from 'domain/repository/PairRepositoryInterface';
import PairFactory from 'domain/factory/PairFactory';
import PairDomainService from 'domain/domainservice/PairDomainService';


export default class PairApplication {
    private readonly pairRepository: PairRepositoryInterface;
    private readonly pairDomainService: PairDomainService;
    private readonly pairFactory: PairFactory;

    constructor(pairRepository: PairRepositoryInterface) {
        this.pairRepository = pairRepository;
        this.pairDomainService = new PairDomainService(pairRepository);
        this.pairFactory = new PairFactory(this.pairDomainService);
    }

    public async findPairAll() {
        try {
            const pairAggregations = await this.pairRepository.findAll();
            const pairAll = await this.pairFactory.createPairAll(pairAggregations);
            return pairAll;
        } catch (e) {
            throw new Error(`Error PairApplication::findPairAll(): ${e.message}`);
        }
    }

    // NOTE::UserApplication::update()と全く同じになる
    public async update(data: { id: number, pair_name: string, teams_id: number }) {
        try {
            // pair_idに紐づくPair情報を持ったUser集約
            const pairEntity = await this.pairRepository.findByPairId(data.id);
            // teams_idに紐づくTeam情報を持ったUser集約
            const userData = await this.pairFactory.updatePair(data, pairEntity);
            await this.pairRepository.update(userData);
        } catch (e) {
            throw new Error(`Error PairApplication::update(): ${e.message}`);
        }
    }
}