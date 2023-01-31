import { Patient } from './entities/patient.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PatientsService } from './patients.service';

describe('PatientsService', () => {
  let service: PatientsService;
  const patientsRepositoryMock = {}

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientsService,
      {provide : getRepositoryToken(Patient), useValue: patientsRepositoryMock}],
    }).compile();

    service = module.get<PatientsService>(PatientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
