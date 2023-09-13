param(
	[bool]$FailOnOutdatedPackages = $true
)

npm outdated;

$result = $LASTEXITCODE -band $FailOnOutdatedPackages

exit $result