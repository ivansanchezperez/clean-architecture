param(
    [string]$MaxSeverityLevel = 'Moderate'
)

npm audit;

[flags()] Enum SeverityLevel
{
  None = 0x00
  Info = 0x01
  Low = 0x02
  Moderate = 0x04
  High = 0x08
  Critical = 0x10
}
$severityLevel = [SeverityLevel] $MaxSeverityLevel
$severityLevel = [SeverityLevel] [Math]::Pow(2, [Math]::Floor([Math]::Log($severityLevel, 2)))
$mask = if ($severityLevel -eq [SeverityLevel]::None) { 0 } else { $severityLevel * 2 - 1 }
$result = $LASTEXITCODE - ($LASTEXITCODE -band $mask)
$result = if ($result -ne 0) { 1 } else { 0 };

exit $result
