enum ProductCode {
  Pac = "04510",
  Sedex = "04014",
  Sedex10 = "04790",
  Sedex12 = "04782",
  SedexHoje = "40290",
  PacContratoAgencia = "03298",
  SedexContratoAgencia = "03220",
  Sedex10ContratoAgencia = "03158",
  Sedex12ContratoAgencia = "03140",
  SedexHojeContratoAgencia = "03204",
  ImpressoNormal = "20010",
  ImpressoModico = "20192",
  PacketStandard = "33162",
  PacketExpress = "33170",
}

enum AdditionalService {
  InsuranceDeclarationSedex = "019",
  InsuranceDeclarationPac = "064",
  InsuranceDeclarationMiniEnvios = "065",
}

export { ProductCode, AdditionalService };
